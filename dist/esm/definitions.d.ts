declare global {
    interface PluginRegistry {
        SMS?: SmsPlugin;
    }
}
export interface SmsPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
    configEndpoint(options: {
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
