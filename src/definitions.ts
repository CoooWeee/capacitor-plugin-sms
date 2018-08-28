declare global {
  interface PluginRegistry {
    SMS?: SMSPlugin;
  }
}

export interface SMSPlugin {
  echo(options: { value: string }): Promise<{value: string}>;
  sendSMS(options: { number: string, message: string }): Promise<{result: { method: string, value: boolean }}>;
}
