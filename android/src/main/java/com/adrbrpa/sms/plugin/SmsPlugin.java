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


@CapacitorPlugin(name = "SmsPlugin", permissions = {
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
        Log.e(TAG, "[SMS Plugin Android]: sendSms called.");

        if (!isSmsPermissionGranted()) {
            requestAllPermissions(call, "permissionCallback");
            return;
        }

        Log.d("sendSms", "sendSms");

        var mobileNumber = call.getString("number");
        var message = call.getString("message");

        SmsManager smsManager = SmsManager.getDefault();
        smsManager.sendTextMessage(mobileNumber, null, message, null, null);
    }
}
