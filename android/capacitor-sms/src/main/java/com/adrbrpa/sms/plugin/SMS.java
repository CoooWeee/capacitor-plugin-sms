package com.adrbrpa.sms.plugin;

import android.Manifest;
import android.app.PendingIntent;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.support.v4.app.ActivityCompat;
import android.support.v4.content.ContextCompat;
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
    private static final int SEND_SMS_CODE = 23;

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

        this.mobileNumber = call.getString("number");
        this.message = call.getString("message");




        /*
        SmsManager sms = SmsManager.getDefault();
        List<String> messages = sms.divideMessage(message);

        Log.e(TAG, "[SMS Plugin Native Android]: sendSMS " + messages);

        for (String msg : messages)
        {
            Log.e(TAG, "[SMS Plugin Native Android]: sendSMS " + msg);
            PendingIntent sentIntent = PendingIntent.getBroadcast(getActivity(), 0,new Intent("SMS_SENT"), 0);
            PendingIntent deliveredIntent =PendingIntent.getBroadcast(getActivity(), 0,new  Intent("SMS_DELIVERED"), 0);

            sms.sendTextMessage(number, null, msg, sentIntent, deliveredIntent);

            JSObject ret = new JSObject();
            ret.put("method", "sendSMS");
            ret.put("value", true);
            call.success(ret);
        }
        */

        this.permissionCheck();

    }

    private boolean isSendSmsAllowed() {
        int result = ContextCompat.checkSelfPermission(getContext(), Manifest.permission.SEND_SMS);
        if (result == PackageManager.PERMISSION_GRANTED) {
            return true;
        } else {
            return false;
        }
    }

    private void permissionCheck(){
        if (isSendSmsAllowed()) {
            Log.d("Permission", "permission allowed to SEND_SMS");
            sendSms();
            return;
        }

        requestSmsSendPermission();
    }

    private void sendSms() {
        /*
        SmsManager sms = SmsManager.getDefault();
        ArrayList<String> parts = sms.divideMessage("MESSAGE");
        sms.sendMultipartTextMessage("670380247", null, parts, null,
                null);
                */
        Log.d("sendSms", "sendSms");
        SmsManager smsManager = SmsManager.getDefault();
        smsManager.sendTextMessage(this.mobileNumber, null, this.message, null, null);
    }

    //Requesting permission
    private void requestSmsSendPermission() {

        if (ActivityCompat.shouldShowRequestPermissionRationale(getActivity(), Manifest.permission.SEND_SMS)) {
            //If the user has denied the permission previously your code will come to this block
            //Here you can explain why you need this permission
            //Explain here why you need this permission
        }

        //And finally ask for the permission
        ActivityCompat.requestPermissions(getActivity(), new String[] { Manifest.permission.SEND_SMS },
                SEND_SMS_CODE);
    }

}
