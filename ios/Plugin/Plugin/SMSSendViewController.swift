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
    
    public override func viewDidLoad() {
        super.viewDidLoad()
        
        print("[SMS Plugin Native iOS]: SMSSendViewController::viewDidLoad");
        
    }
    
    public override func viewWillAppear(_ animated: Bool) {
        
        print("[SMS Plugin Native iOS]: SMSSendViewController::viewWillAppear");
        
    }
    
    public override func viewDidAppear(_ animated: Bool) {
        
        super.viewDidAppear(animated);
        
        print("[SMS Plugin Native iOS]: SMSSendViewController::viewDidAppear")
        
        // Do any additional setup after loading the view, typically from a nib.
        sendSMSText()
      
    }
    
    func sendSMSText() {
        print("[SMS Plugin Native iOS]: SMSSendViewController::sendSMSText")
        
        if (MFMessageComposeViewController.canSendText()) {
            let messageVC = MFMessageComposeViewController()
            
            messageVC.body = "Enter a message";
            messageVC.recipients = ["Enter tel-nr"]
            messageVC.messageComposeDelegate = self;
            
            self.present(messageVC, animated: false, completion: nil)
            
        }
        else {
            print("[SMS Plugin Native iOS]: SMSSendViewController::sendSMSText -> SMS services are not available.")
        }
    }
    
    func messageComposeViewController(_ controller: MFMessageComposeViewController, didFinishWith result: MessageComposeResult) {
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
