import { WebPlugin } from '@capacitor/core';
import { SMSPluginPlugin } from './definitions';

export class SMSPluginWeb extends WebPlugin implements SMSPluginPlugin {
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
}

const SMSPlugin = new SMSPluginWeb();

export { SMSPlugin };
