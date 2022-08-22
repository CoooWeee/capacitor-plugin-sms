# sms-plugin

This plugin allows sending sms. So far only Android support tested. Not sure about Web/iOS.

## Install

```bash
yarn add sms-plugin
npx cap sync
```

## API

<docgen-index>

* [`sendSms(...)`](#sendsms)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### sendSms(...)

```typescript
sendSms(options: { number: string; message: string; }) => Promise<void>
```

| Param         | Type                                              |
| ------------- | ------------------------------------------------- |
| **`options`** | <code>{ number: string; message: string; }</code> |

--------------------

</docgen-api>
