import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitor.ionicframework.com/docs/plugins/ios
 */
@objc(SMS)
public class SMS: CAPPlugin {
    
    var ssc = SMSSendViewController()
    
    @objc func echo(_ call: CAPPluginCall) {
        print("[SMS Plugin Native iOS]: SMS::echo");
        let value = call.getString("value") ?? ""
        call.success([
            "value": value
        ])
    }
    
    @objc func sendSMS(_ call: CAPPluginCall) {
        print("[SMS Plugin Native iOS]: SMS::sendSMS");

        let number = call.getString("number") ?? nil
        let message = call.getString("message") ?? nil
        
        /*
        call.success([
            "number": number,
            "message": message
        ])
         */
        
        let options = [
            "number" : call.getString("number") ?? nil,
            "message" : call.getString("message") ?? nil,
            ] as [String : Any]
        
        self.ssc.options = options;

         DispatchQueue.main.async {
            // Update UI
            self.bridge.viewController.present(self.ssc, animated: true, completion: {
                call.success([
                    "value": "[SMS Plugin Native iOS]: SMS::sendSMS OK"
                    ])
            });
        }
        
    }
}
