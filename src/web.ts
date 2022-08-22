import { WebPlugin } from '@capacitor/core';
import { SmsPlugin } from './definitions';

export class SmsWeb extends WebPlugin implements SmsPlugin {

  platform: string | null = null;
  endpoint: RequestInfo | URL | null = null;

  constructor() {
    super({
      name: 'SmsPlugin',
      platforms: ['web']
    });
  }



  async sendSms(options: { number: string, message: string }): Promise<void> {
    console.log('SmsPluginWeb::sendSms | method called', options);

    return Promise.reject("not implemented");
  }
}

