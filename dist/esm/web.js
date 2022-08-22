import { WebPlugin } from '@capacitor/core';
export class SmsWeb extends WebPlugin {
    constructor() {
        super({
            name: 'SmsPlugin',
            platforms: ['web']
        });
        this.platform = null;
        this.endpoint = null;
    }
    async sendSms(options) {
        console.log('SmsPluginWeb::sendSms | method called', options);
        return Promise.reject("not implemented");
    }
}
//# sourceMappingURL=web.js.map