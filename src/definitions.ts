declare global {
  interface PluginRegistry {
    SMSPlugin?: SMSPluginPlugin;
  }
}

export interface SMSPluginPlugin {
  echo(options: { value: string }): Promise<{value: string}>;
}
