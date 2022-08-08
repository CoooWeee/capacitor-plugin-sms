import { registerPlugin } from '@capacitor/core';
const SMS = registerPlugin('SMS', {
    web: () => import('./web').then(m => new m.SmsPluginWeb()),
});
export * from './definitions';
export { SMS };
//# sourceMappingURL=index.js.map