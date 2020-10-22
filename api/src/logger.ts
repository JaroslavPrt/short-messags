import { AsyncLocalStorage } from 'async_hooks';
import { Logger } from 'tslog';
import { config, Environments } from './config';

export function logger(name: string = ''): Logger {
  let ns = name;
  const asyncLocalStorage: AsyncLocalStorage<{ requestId: string }> = new AsyncLocalStorage();

  if (ns) {
    ns = name.replace(/.+\/(src|dist)/, '');
  }

  return new Logger({
    name: ns,
    minLevel: config.LogLevel,
    type: config.nodeEnv === Environments.development ? 'pretty' : 'json',
    requestId: () => asyncLocalStorage.getStore()?.requestId,
  });
}
