import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { LoadMessageService, SidebarService } from 'src/app/services/sidebar';
import { isInbound } from 'src/app/services/utilities';
import { IMailMessage } from 'src/app/types/models';

@Component({
  selector: 'mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnDestroy, OnInit {
  messages: IMailMessage[] = [
    {
      id: 1,
      profilePicture: "../../../assets/images/users/user-4.png",
      sender: "Tavershima Ako",
      subject: "Invitation to the team event",
      message: `I am pleased to invite you all to our team building event that will be held next Friday, January 
      21st at 2 pm. The event will be held at the company's conference hall, we will have games`,
      date: "20 Oct 2024",
      isRead: false,
      attachments: 0
    },
    {
      id: 2,
      profilePicture: "../../../assets/images/users/user-1.png",
      sender: "Onel More",
      subject: "Invitation to the team event",
      message: `I am pleased to invite you all to our team building event that will be held next Friday,
                                January 21st at 2 pm. The event will be held at the company's conference hall, we will
                                have games`,
      date: "20 Oct 2024",
      isRead: false,
      attachments: 0
    },
    {
      id: 3,
      profilePicture: "../../../assets/images/users/user-2.png",
      sender: "Grace Collins",
      subject: "Invitation to the team event",
      message: `I hope this email finds you well. As you are aware, the COVID-19 pandemic has forced many businesses
       to adapt to a remote work model, and we have been no exception. Over the past year, our team has been ...`,
      date: "20 Oct 2024",
      isRead: false,
      attachments: 0
    },
    {
      id: 4,
      profilePicture: "../../../assets/images/users/user-3.png",
      sender: "Mark Manner",
      subject: "Invitation to the team event",
      message: `I am pleased to invite you all to our team building event that will be held next Friday, January 
      21st at 2 pm. The event will be held at the company's conference hall, we will have games`,
      date: "20 Oct 2024",
      isRead: false,
      attachments: 0
    },
    {
      id: 5,
      profilePicture: "../../../assets/images/users/user-5.png",
      sender: "Akomolafe Joe",
      subject: "Invitation to the team event",
      message: `I am pleased to invite you all to our team building event that will be held next Friday, January 
      21st at 2 pm. The event will be held at the company's conference hall, we will have games`,
      date: "20 Oct 2024",
      isRead: false,
      attachments: 0
    },
    {
      id: 6,
      profilePicture: "../../../assets/images/users/user-1.png",
      sender: "Akomolafe Joe",
      subject: "Invitation to the team event",
      message: `I am pleased to invite you all to our team building event that will be held next Friday, January 
      21st at 2 pm. The event will be held at the company's conference hall, we will have games`,
      date: "20 Oct 2024",
      isRead: false,
      attachments: 0
    },
    {
      id: 7,
      profilePicture: "../../../assets/images/users/user-2.png",
      sender: "Akomolafe Joe",
      subject: "Invitation to the team event",
      message: `I am pleased to invite you all to our team building event that will be held next Friday, January 
      21st at 2 pm. The event will be held at the company's conference hall, we will have games`,
      date: "20 Oct 2024",
      isRead: false,
      attachments: 0
    },
    {
      id: 8,
      profilePicture: "../../../assets/images/users/user-3.png",
      sender: "Mark Manner",
      subject: "Invitation to the team event",
      message: `I am pleased to invite you all to our team building event that will be held next Friday, January 
      21st at 2 pm. The event will be held at the company's conference hall, we will have games`,
      date: "20 Oct 2024",
      isRead: false,
      attachments: 0
    },
    {
      id: 9,
      profilePicture: "../../../assets/images/users/user-5.png",
      sender: "Akomolafe Joe",
      subject: "Invitation to the team event",
      message: `I am pleased to invite you all to our team building event that will be held next Friday, January 
      21st at 2 pm. The event will be held at the company's conference hall, we will have games`,
      date: "20 Oct 2024",
      isRead: false,
      attachments: 0
    },
    {
      id: 10,
      profilePicture: "../../../assets/images/users/user-1.png",
      sender: "Akomolafe Joe",
      subject: "Invitation to the team event",
      message: `I am pleased to invite you all to our team building event that will be held next Friday, January 
      21st at 2 pm. The event will be held at the company's conference hall, we will have games`,
      date: "20 Oct 2024",
      isRead: false,
      attachments: 0
    },
    {
      id: 11,
      profilePicture: "../../../assets/images/users/user-2.png",
      sender: "Akomolafe Joe",
      subject: "Invitation to the team event",
      message: `I am pleased to invite you all to our team building event that will be held next Friday, January 
      21st at 2 pm. The event will be held at the company's conference hall, we will have games`,
      date: "20 Oct 2024",
      isRead: false,
      attachments: 0
    }
  ]

  @ViewChild("inbox", { static: true }) inbox!: ElementRef
  @ViewChild("sidebar", { static: true }) sidebar!: ElementRef

  constructor(private sidebarService: SidebarService, private messageService: LoadMessageService){
    this.mouseEvent = this.mouseEvent.bind(this)
    sidebarService.sidebar.subscribe({
      next: x =>{
        if (x){
          this.sidebar.nativeElement.classList.remove("out")
          this.sidebar.nativeElement.classList.add("in")
          setTimeout(() => {
            window.addEventListener("click", this.mouseEvent)
          }, 50);

        }else{
          window.removeEventListener("click", this.mouseEvent)
          this.sidebar.nativeElement.classList.remove("in")
          this.sidebar.nativeElement.classList.add("out")
        }
      }
    })
  }

  mouseEvent(e:MouseEvent){
    let el = this.sidebar.nativeElement.getBoundingClientRect()
    let b = isInbound(el.top, el.left, el.bottom, el.right, e.clientX, e.clientY)
    if (!b){
      this.sidebarService.toggleSidebar()
      setTimeout(() => {
        window.removeEventListener("click", this.mouseEvent)
      }, 50);
    }
  }

  ngOnInit(): void {
    this.messageService.messenger.subscribe({
      next: id =>{
        if(id == 0){
          this.inbox.nativeElement.classList.remove("out")
          this.inbox.nativeElement.classList.add("in")
        }else{
          this.inbox.nativeElement.classList.remove("in")
          this.inbox.nativeElement.classList.add("out")
        }
      }
    })
  }

  ngOnDestroy(): void {
    window.removeEventListener("click", this.mouseEvent)
  }
}
