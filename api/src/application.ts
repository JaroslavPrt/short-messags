import Koa from 'koa';

import Router from '@koa/router';

import { config } from './config';
import { logger } from './logger';

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
  protected shuttingDown = false;

  private counters = new Map<OsSignals, number>();

  constructor(
    private readonly http = new Koa(),
    private readonly router = new Router(),
    protected log = logger(__filename),
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

    this.router.get(['/health', '/ping'], (ctx) => {
      ctx.status = 200;
    });

    this.http
      .use(this.router.routes())
      .use(this.router.allowedMethods())
      .listen(config.appPort, () => this.log.info(`short-messages api app running on port ${config.appPort}.`));
  }

  private eventListener(signal: OsSignals) {
    const c = (this.counters.get(signal) ?? 0) + 1;
    this.counters.set(signal, c);

    const force = c > 1;

    this.log.info(`${signal} event received ${force ? 'force' : ''}`);

    this.gracefulShutdown(force)
      .then(() => process.exit(0))
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

    // db disconnected

    this.log.info('db disconnect');

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return Promise.resolve(null);
  }
}
