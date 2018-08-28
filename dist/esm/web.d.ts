import { WebPlugin } from '@capacitor/core';
import { SMSPlugin } from './definitions';
export declare class SMSPluginWeb extends WebPlugin implements SMSPlugin {
    constructor();
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
    sendSMS(options: {
        number: string;
        message: string;
    }): Promise<{
        result: {
            method: string;
            value: boolean;
        };
    }>;
}
declare const SMSWeb: SMSPluginWeb;
export { SMSWeb };
