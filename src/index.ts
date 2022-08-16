import { registerPlugin } from '@capacitor/core';

import type { SmsPlugin } from './definitions';

const Sms = registerPlugin<SmsPlugin>('Sms', {
  web: () => import('./web').then(m => new m.SmsWeb()),
});

export * from './definitions';
export { Sms };
