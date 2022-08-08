//
//  SMSSendViewController.swift
//  Plugin
//
//  Created by Adrián Brito on 19/9/18.
//  Copyright © 2018 Max Lynch. All rights reserved.
//

import Foundation
import UIKit
import MessageUI

public class SMSSendViewController: UIViewController, MFMessageComposeViewControllerDelegate  {
    
    var options: [String : Any]!
    
    public override func viewDidLoad() {
        super.viewDidLoad()
        
        print("[SMS Plugin Native iOS]: SMSSendViewController::viewDidLoad");

        sendSmsText()
        
    }
    
    public override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        print("[SMS Plugin Native iOS]: SMSSendViewController::viewWillAppear");
        
    }
    
    public override func viewDidAppear(_ animated: Bool) {
        
        super.viewDidAppear(animated)
        
        print("[SMS Plugin Native iOS]: SMSSendViewController::viewDidAppear")
        
        // Do any additional setup after loading the view, typically from a nib.
        
      
    }
    
    public func sendSmsText() {
        print("[SMS Plugin Native iOS]: SMSSendViewController::sendSmsText")
        
        if JSONSerialization.isValidJSONObject(self.options) {
            print("[SMS Plugin Native iOS]: JSONSerialization.isValidJSONObject");
            
            if let dictionary = self.options as? [String: Any] {
                
                // treat it as a string key dictionary.
                let number = dictionary["number"] as! String
                let message = dictionary["message"] as! String
                
                if (MFMessageComposeViewController.canSendText()) {
                    let messageVC = MFMessageComposeViewController()
                    
                    messageVC.body = message;
                    messageVC.recipients = [number]
                    messageVC.messageComposeDelegate = self;
                    
                    self.present(messageVC, animated: false, completion: nil)
                    
                }
                else {
                    print("[SMS Plugin Native iOS]: SMSSendViewController::sendSmsText -> SMS services are not available.")
                }
            }
        }
        
    }
    
    public func messageComposeViewController(_ controller: MFMessageComposeViewController, didFinishWith result: MessageComposeResult) {
        switch (result.rawValue) {
        case MessageComposeResult.cancelled.rawValue:
            print("[SMS Plugin Native iOS]: SMSSendViewController::messageComposeViewController -> Message was cancelled.")
            self.dismiss(animated: true, completion: nil)
        case MessageComposeResult.failed.rawValue:
            print("[SMS Plugin Native iOS]: SMSSendViewController::messageComposeViewController -> Message failed.")
            self.dismiss(animated: true, completion: nil)
        case MessageComposeResult.sent.rawValue:
            print("[SMS Plugin Native iOS]: SMSSendViewController::messageComposeViewController -> Message was sent.")
            self.dismiss(animated: true, completion: nil)
        default:
            break;
        }
    }
    
}
