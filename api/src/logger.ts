import { AsyncLocalStorage } from 'async_hooks';
import { Logger } from 'tslog';

import { AppEnvironments, appConfig } from './config';

export function logger(name: string): Logger {
  let ns = name;
  const asyncLocalStorage: AsyncLocalStorage<{ requestId: string }> = new AsyncLocalStorage();

  if (ns) {
    ns = name.replace(/.+\/(src|dist)/, '');
  }

  return new Logger({
    name: ns,
    minLevel: appConfig.LogLevel,
    type: appConfig.nodeEnv === AppEnvironments.development ? 'pretty' : 'json',
    requestId: () => asyncLocalStorage.getStore()?.requestId,
  });
}
