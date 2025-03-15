import { Component, Input  } from '@angular/core';
import { LoadMessageService } from 'src/app/services/sidebar';

@Component({
  selector: 'mail-message',
  templateUrl: './mail-message.component.html',
  styleUrls: ['./mail-message.component.css']
})
export class MailMessageComponent {

  constructor(private messageService: LoadMessageService){
   
  }

  inbox(){
    this.messageService.loadMessage(0)
  }
}
