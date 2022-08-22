export interface SmsPlugin {
    sendSms(options: {
        number: string;
        message: string;
    }): Promise<void>;
}
