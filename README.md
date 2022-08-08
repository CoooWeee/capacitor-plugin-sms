# sms-plugin

This plugin allows sending sms. So far only Android support tested. Not sure about Web/iOS.

## Install

```bash
yarn add sms-plugin
npx cap sync
```

## API

<docgen-index>

* [`echo(...)`](#echo)
* [`configEndpoint(...)`](#configendpoint)
* [`sendSms(...)`](#sendsms)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### echo(...)

```typescript
echo(options: { value: string; }) => Promise<{ value: string; }>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

--------------------


### configEndpoint(...)

```typescript
configEndpoint(options: { endpoint: RequestInfo | URL; }) => Promise<{ result: { method: string; value: boolean; }; }>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ endpoint: any; }</code> |

**Returns:** <code>Promise&lt;{ result: { method: string; value: boolean; }; }&gt;</code>

--------------------


### sendSms(...)

```typescript
sendSms(options: { number: string; message: string; }) => Promise<{ result: { method: string; value: boolean; }; }>
```

| Param         | Type                                              |
| ------------- | ------------------------------------------------- |
| **`options`** | <code>{ number: string; message: string; }</code> |

**Returns:** <code>Promise&lt;{ result: { method: string; value: boolean; }; }&gt;</code>

--------------------

</docgen-api>
