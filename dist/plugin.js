var capacitorSms = (function (exports, core) {
    'use strict';

    const Sms = core.registerPlugin('Sms', {
        web: () => Promise.resolve().then(function () { return web; }).then(m => new m.SmsWeb()),
    });

    class SmsWeb extends core.WebPlugin {
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

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        SmsWeb: SmsWeb
    });

    exports.Sms = Sms;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
