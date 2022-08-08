import { WebPlugin } from '@capacitor/core';
export class SmsPluginWeb extends WebPlugin {
    constructor() {
        super({
            name: 'SmsPlugin',
            platforms: ['web']
        });
        this.platform = null;
        this.endpoint = null;
    }
    async echo(options) {
        console.log('SmsPluginWeb::echo | method called');
        console.log('ECHO', options);
        return Promise.resolve({ value: options.value });
    }
    async configEndpoint(options) {
        console.log('SmsPluginWeb::config | method called');
        this.endpoint = options.endpoint;
        this.platform = options.platform;
        return Promise.resolve({ result: { method: 'config', value: true } });
    }
    async sendSms(options) {
        console.log('SmsPluginWeb::sendSms | method called', options);
        if (this.endpoint == null) {
            throw new Error('endpoint not set');
        }
        fetch(this.endpoint, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ platform: this.platform, number: options.number, text: options.message })
        })
            .then(function (res) {
            console.log('res', res);
            return Promise.resolve({ result: { method: 'sendSms', value: true } });
        })
            .catch(function (error) { console.log(error); });
        return Promise.resolve({ result: { method: 'sendSms', value: false } });
    }
}
const SmsWeb = new SmsPluginWeb();
export { SmsWeb };
//# sourceMappingURL=web.js.map