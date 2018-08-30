package com.adrbrpa.sms.plugin;

import android.app.PendingIntent;
import android.content.Intent;
import android.telephony.SmsManager;
import android.util.Log;

import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;

import java.util.List;

@NativePlugin()
public class SMS extends Plugin {


    private static final String TAG = SMS.class.getSimpleName();
    String mobileNumber = "0123456789";
    String message = "Message";

    @PluginMethod()
    public void echo(PluginCall call) {
        Log.e(TAG, "[SMS Plugin Native Android]: echo called.");
        String value = call.getString("value");

        JSObject ret = new JSObject();
        ret.put("value", value);
        call.success(ret);
    }

    @PluginMethod()
    public void sendSMS(PluginCall call) {

        Log.e(TAG, "[SMS Plugin Native Android]: sendSMS called.");

        String number = call.getString("number");
        String message = call.getString("message");

        /*
        JSObject ret = new JSObject();
        ret.put("method", "sendSMS");
        ret.put("value", true);
        call.success(ret);
        */

        SmsManager sms = SmsManager.getDefault();
        List<String> messages = sms.divideMessage(message);

        Log.e(TAG, "[SMS Plugin Native Android]: sendSMS " + messages);

        for (String msg : messages)
        {
            Log.e(TAG, "[SMS Plugin Native Android]: sendSMS " + msg);
            PendingIntent sentIntent = PendingIntent.getBroadcast(getActivity(), 0,new Intent("SMS_SENT"), 0);
            PendingIntent deliveredIntent =PendingIntent.getBroadcast(getActivity(), 0,new  Intent("SMS_DELIVERED"), 0);

            sms.sendTextMessage(number, null, msg, sentIntent, deliveredIntent);
        }

    }

}
