import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'mail',
  templateUrl: './mail-layout.component.html',
  styleUrls: ['./mail-layout.component.css']
})
export class MailLayoutComponent {
  @ViewChild("sidebar", {static: true}) sidebar!: ElementRef

  constructor(){
    // sidebarService.sidebar.subscribe({
    //   next: n =>{
    //     if(n){
    //       this.sidebar.nativeElement.classList.add("sidebar-in")
    //       this.sidebar.nativeElement.focus()
    //     }else{
    //       this.sidebar.nativeElement.classList.remove("sidebar-in")
    //     }
    //   }
    // })
  }

  closeSidebar(){
    //this.sidebarService.toggleSidebar()
  }
}
