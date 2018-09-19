import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitor.ionicframework.com/docs/plugins/ios
 */
@objc(SMS)
public class SMS: CAPPlugin {
    
    var ssc = SMSSendViewController!
    
    @objc func echo(_ call: CAPPluginCall) {
        print("[SMS Plugin Native iOS]: SMS::echo");
        let value = call.getString("value") ?? ""
        call.success([
            "value": value
        ])
    }
    
    @objc func sendSMS(_ call: CAPPluginCall) {
        print("[SMS Plugin Native iOS]: SMS::sendSMS");

        let number = call.getString("number") ?? ""
        let message = call.getString("message") ?? ""
        
        /*
        call.success([
            "number": number,
            "message": message
        ])
         */
        
        self.bridge.viewController.present(self.ssc!, animated: true, completion: {
            call.success([
                "value": "[SMS Plugin Native iOS]: SMS::sendSMS OK"
                ])
        });
    }
}
