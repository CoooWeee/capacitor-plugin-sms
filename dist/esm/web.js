var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { WebPlugin } from '@capacitor/core';
export class SMSPluginWeb extends WebPlugin {
    constructor() {
        super({
            name: 'SMSPlugin',
            platforms: ['web']
        });
    }
    echo(options) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('SMSPluginWeb::echo | method called');
            console.log('ECHO', options);
            return Promise.resolve({ value: options.value });
        });
    }
    configEndpoint(options) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('SMSPluginWeb::config | method called');
            this.endpoint = options.endpoint;
            return Promise.resolve({ result: { method: 'config', value: true } });
        });
    }
    sendSMS(options) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('SMSPluginWeb::sendSMS | method called', options);
            fetch(this.endpoint, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ number: options.number, text: options.message })
            })
                .then(function (res) {
                console.log('res', res);
                return Promise.resolve({ result: { method: 'sendSMS', value: true } });
            })
                .catch(function (error) { console.log(error); });
            return Promise.resolve({ result: { method: 'sendSMS', value: false } });
        });
    }
}
const SMSWeb = new SMSPluginWeb();
export { SMSWeb };
//# sourceMappingURL=web.js.map