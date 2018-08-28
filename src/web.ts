import { WebPlugin } from '@capacitor/core';
import { SMSPlugin } from './definitions';

export class SMSPluginWeb extends WebPlugin implements SMSPlugin {
  constructor() {
    super({
      name: 'SMSPlugin',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO', options);
    return Promise.resolve({ value: options.value });
  }

  async sendSMS(options: { number: string, message: string }): Promise<{result: { method: string, value: boolean }}> {
    console.log('ECHO', options);
    return Promise.resolve({result: { method: 'sendSMS', value: true }});
  }
}

const SMSWeb = new SMSPluginWeb();

export { SMSWeb };
