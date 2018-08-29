package com.adrbrpa.sms.plugin;

import android.util.Log;

import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;

@NativePlugin()
public class SMS extends Plugin {


    private static final String TAG = SMS.class.getSimpleName();
    String mobileNumber = "0123456789";
    String message = "Message";

    @PluginMethod()
    public void echo(PluginCall call) {
        Log.e(TAG, "[SMS Plugin Native Android]: echo");
        String value = call.getString("value");

        JSObject ret = new JSObject();
        ret.put("value", value);
        call.success(ret);
    }

    @PluginMethod()
    public void sendSMS(PluginCall call) {

        String value = call.getString("value");

        JSObject ret = new JSObject();
        ret.put("value", value);
        call.success(ret);

        /*
        SmsManager sms = SmsManager.getDefault();
        List<String> messages = sms.divideMessage(message);

        for (String msg : messages)
        {
            PendingIntent sentIntent = PendingIntent.getBroadcast(getActivity(), 0,new   Intent("SMS_SENT"), 0);
            PendingIntent deliveredIntent =PendingIntent.getBroadcast(getActivity(), 0,new  Intent("SMS_DELIVERED"), 0);

            sms.sendTextMessage(personalPhone, null, msg, sentIntent, deliveredIntent);
        }
        */

    }

}
