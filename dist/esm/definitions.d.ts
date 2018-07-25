declare global {
    interface PluginRegistry {
        SMS?: SMSPlugin;
    }
}
export interface SMSPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
