import { WebPlugin } from '@capacitor/core';
import { SmsPlugin } from './definitions';
export declare class SmsWeb extends WebPlugin implements SmsPlugin {
    platform: string | null;
    endpoint: RequestInfo | URL | null;
    constructor();
    sendSms(options: {
        number: string;
        message: string;
    }): Promise<{
        result: {
            success: boolean;
        };
    }>;
}
