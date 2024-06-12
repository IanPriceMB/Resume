import { lazy } from 'react';

export function lazyImport(path: string, namedExport: string) {
  return lazy(() => {
    const promise = import(`${path}`);

    if (namedExport == null) {

      return promise;

    } else {

      return promise.then(module => ({ default: module[namedExport] }));

    }
  })
};