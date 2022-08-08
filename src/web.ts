import { WebPlugin } from '@capacitor/core';
import { SmsPlugin } from './definitions';

export class SmsPluginWeb extends WebPlugin implements SmsPlugin {

  platform: string | null = null;
  endpoint: RequestInfo | URL | null = null;

  constructor() {
    super({
      name: 'SmsPlugin',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('SmsPluginWeb::echo | method called');
    console.log('ECHO', options);
    return Promise.resolve({ value: options.value });
  }

  async configEndpoint(options: { platform: string, endpoint: RequestInfo | URL }): Promise<{ result: { method: string, value: boolean } }> {
    console.log('SmsPluginWeb::config | method called');
    this.endpoint = options.endpoint;
    this.platform = options.platform;
    return Promise.resolve({ result: { method: 'config', value: true } });
  }

  async sendSms(options: { number: string, message: string }): Promise<{ result: { method: string, value: boolean } }> {
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
      .catch(function (error) { console.log(error) });

    return Promise.resolve({ result: { method: 'sendSms', value: false } });
  }
}

const SmsWeb = new SmsPluginWeb();

export { SmsWeb };
