import { registerPlugin } from '@capacitor/core';

import type { SmsPlugin } from './definitions';

const SMS = registerPlugin<SmsPlugin>('SMS', {
  web: () => import('./web').then(m => new m.SmsPluginWeb()),
});

export * from './definitions';
export { SMS };
