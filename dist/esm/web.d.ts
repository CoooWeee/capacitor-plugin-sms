import { WebPlugin } from '@capacitor/core';
import { SMSPlugin } from './definitions';
export declare class SMSPluginWeb extends WebPlugin implements SMSPlugin {
    platform: string;
    endpoint: string;
    constructor();
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
    configEndpoint(options: {
        platform: string;
        endpoint: string;
    }): Promise<{
        result: {
            method: string;
            value: boolean;
        };
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
