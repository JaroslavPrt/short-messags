import { AsyncLocalStorage } from 'async_hooks';
import { Logger } from 'tslog';

import { AppEnvironments, config } from './config';

export function logger(name: string): Logger {
  let ns = name;
  const asyncLocalStorage: AsyncLocalStorage<{ requestId: string }> = new AsyncLocalStorage();

  if (ns) {
    ns = name.replace(/.+\/(src|dist)/, '');
  }

  return new Logger({
    name: ns,
    minLevel: config.LogLevel,
    type: config.nodeEnv === AppEnvironments.development ? 'pretty' : 'json',
    requestId: () => asyncLocalStorage.getStore()?.requestId,
  });
}
