package com.adrbrpa.sms.plugin;

import android.Manifest;
import android.telephony.SmsManager;
import android.util.Log;

import com.getcapacitor.JSObject;
import com.getcapacitor.PermissionState;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.getcapacitor.annotation.Permission;
import com.getcapacitor.annotation.PermissionCallback;


@CapacitorPlugin(name = "Sms", permissions = {
        @Permission(alias = SmsPlugin.PERMISSIONS, strings = {Manifest.permission.SEND_SMS}),
})
public class SmsPlugin extends Plugin {
    static final String PERMISSIONS = "smsPermissions";
    private static final String TAG = SmsPlugin.class.getSimpleName();

    /**
     * Checks the the given permission is granted or not
     *
     * @return Returns true if the permission is granted and false if it is denied.
     */
    private boolean isSmsPermissionGranted() {
        return getPermissionState(SmsPlugin.PERMISSIONS) == PermissionState.GRANTED;
    }

    @PermissionCallback
    public void permissionCallback(PluginCall call) {
        if (!isSmsPermissionGranted()) {
            call.reject("User denied sms permission");
            return;
        }

        switch (call.getMethodName()) {
            case "sendSms":
                sendSms(call);
                break;
        }
    }


    @PluginMethod()
    public void sendSms(PluginCall call) {
        try {
            Log.e(TAG, "[SMS Plugin Android]: sendSms called.");

            if (!isSmsPermissionGranted()) {
                requestAllPermissions(call, "permissionCallback");
                return;
            }

            Log.d(TAG, "sendSms");

            var mobileNumber = call.getString("number");
            var message = call.getString("message");

            if (mobileNumber.length() < 5) {
                throw new Error("invalid sms number");
            }

            if (message.length() < 1) {
                throw new Error("invalid sms message");
            }

            if (message.length() > 160) {
                throw new Error("sms message too long");
            }

            SmsManager smsManager = SmsManager.getDefault();
            smsManager.sendTextMessage(mobileNumber, null, message, null, null);

            call.resolve();
        } catch (SecurityException e) {
            Log.e(TAG, "sendSms: " + e.getMessage());
            // expected
            call.reject("could not send sms", e);
        }
    }
}
