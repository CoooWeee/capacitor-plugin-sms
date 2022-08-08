import { WebPlugin } from '@capacitor/core';
import { SmsPlugin } from './definitions';
export declare class SmsPluginWeb extends WebPlugin implements SmsPlugin {
    platform: string | null;
    endpoint: RequestInfo | URL | null;
    constructor();
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
    configEndpoint(options: {
        platform: string;
        endpoint: RequestInfo | URL;
    }): Promise<{
        result: {
            method: string;
            value: boolean;
        };
    }>;
    sendSms(options: {
        number: string;
        message: string;
    }): Promise<{
        result: {
            method: string;
            value: boolean;
        };
    }>;
}
declare const SmsWeb: SmsPluginWeb;
export { SmsWeb };
