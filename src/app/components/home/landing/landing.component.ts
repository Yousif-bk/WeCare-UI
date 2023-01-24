import { Component, EventEmitter, Output } from '@angular/core';
import { MessageAlertInfo } from 'src/app/shared/model/MessageAlertInfo';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  messageAlertInfo: MessageAlertInfo
  save(){
    this.messageAlertInfo = {
      isAlertVisiable: true,
      message: "Text Alert",
      type: "info",
      icon: "info"
    }
  }
}
