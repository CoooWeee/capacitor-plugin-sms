import { registerPlugin } from '@capacitor/core';
const Sms = registerPlugin('Sms', {
    web: () => import('./web').then(m => new m.SmsWeb()),
});
export * from './definitions';
export { Sms };
//# sourceMappingURL=index.js.map