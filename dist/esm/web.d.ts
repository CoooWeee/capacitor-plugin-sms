import { WebPlugin } from '@capacitor/core';
import { SMSPlugin } from './definitions';
export declare class SMSPluginWeb extends WebPlugin implements SMSPlugin {
    constructor();
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
declare const SMSWeb: SMSPluginWeb;
export { SMSWeb };
