import { Component, Input  } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar';
import { IMailMessage } from 'src/app/types/models';


@Component({
  selector: 'inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent {

  @Input() messages?: IMailMessage[]
  
  constructor(private sidebarService: SidebarService){
   
  }

  toggleSidebar(){
    this.sidebarService.toggleSidebar()
  }
}
