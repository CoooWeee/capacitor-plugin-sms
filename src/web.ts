import { WebPlugin } from '@capacitor/core';
import { SMSPlugin } from './definitions';

export class SMSPluginWeb extends WebPlugin implements SMSPlugin {

  platform: string;
  endpoint: string;

  constructor() {
    super({
      name: 'SMSPlugin',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('SMSPluginWeb::echo | method called');
    console.log('ECHO', options);
    return Promise.resolve({ value: options.value });
  }

  async configEndpoint(options: { platform: string, endpoint: string}): Promise<{result: { method: string, value: boolean }}> {
    console.log('SMSPluginWeb::config | method called');
    this.endpoint = options.endpoint;
    this.platform = options.platform;
    return Promise.resolve({result: { method: 'config', value: true }});
  }

  async sendSMS(options: { number: string, message: string }): Promise<{result: { method: string, value: boolean }}> {
    console.log('SMSPluginWeb::sendSMS | method called', options);

    fetch(this.endpoint, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({platform: this.platform, number: options.number, text: options.message})
    })
    .then(function(res) {
      console.log('res', res);
      return Promise.resolve({result: { method: 'sendSMS', value: true }});
    })
    .catch(function(error){ console.log(error)});

    return Promise.resolve({result: { method: 'sendSMS', value: false }});
  }
}

const SMSWeb = new SMSPluginWeb();

export { SMSWeb };
