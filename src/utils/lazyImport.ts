import { lazy } from 'react';

export function explicitLazyImport(path: string, name: string) {
  return lazy(() => import(`${path}`).then(m => m[name]))
};