import './bootstrap';

import Koa from 'koa';
import { Server } from 'http';
import { Connection } from 'typeorm';

import { config } from '@config';
import { logger } from '@logger';
import { apiRouter } from '@infra/web/routes';

// eslint-disable-next-line no-shadow
export enum OsSignals {
  SIGABRT = 'SIGABRT',
  SIGINT = 'SIGINT',
  SIGTERM = 'SIGTERM',
  SIGQUIT = 'SIGQUIT',
  SIGUSR1 = 'SIGUSR1',
  SIGHUP = 'SIGHUP',
  SIGBREAK = 'SIGBREAK',
}

export class Application {
  private counters = new Map<OsSignals, number>();

  private server: Server;

  constructor(
    private readonly connection: Connection,
    private readonly http = new Koa(),
    private readonly log = logger(__filename),
  ) {
    Object.values(OsSignals).forEach((signal) => {
      this.counters.set(signal, 0);
      process.on(signal, () => this.eventListener(signal));
    });

    process.on('uncaughtException', (e) => {
      this.log.error(e, 'uncaught exception thrown');
    });

    process.on('unhandledRejection', (reason, promise) => {
      this.log.error({ reason: reason.toString(), promise: promise.toString() }, 'unhandled rejection at promise');
    });

    this.server = this.http
      .use(apiRouter.routes())
      .use(apiRouter.allowedMethods())
      .listen(config.appPort, () => this.log.info(`ShortMessages API running on port ${config.appPort}.`));
  }

  private eventListener(signal: OsSignals) {
    const c = (this.counters.get(signal) ?? 0) + 1;
    this.counters.set(signal, c);

    const force = c > 1;

    this.log.info(`${signal} event received ${force ? 'force' : ''}`);

    this.gracefulShutdown(force)
      .then(() => {
        this.server.close();
        process.exit(0);
      })
      .catch((err) => {
        if (err instanceof Error) {
          this.log.error(err.message);
        }
        process.exit(1);
      });
  }

  async gracefulShutdown(force: boolean): Promise<void> {
    if (force) {
      throw new Error('Could not close connections in time, forcefully shutting down');
    }

    await this.connection.close();
    this.log.info('DB connection closed');

    return Promise.resolve();
  }
}
