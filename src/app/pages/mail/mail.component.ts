import { Component } from '@angular/core';

interface IMailMessage{
  profilePicture: string
  sender: string
  subject: string
  message: string
  date: string
  isRead: boolean;
  attachments: number
}

@Component({
  selector: 'mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent {
  messages: IMailMessage[] = [
    {
      profilePicture: "../../../assets/images/users/user-4.png",
      sender: "Frank MUL",
      subject: "Invitation to the team event",
      message: `I am pleased to invite you all to our team building event that will be held next Friday, January 
      21st at 2 pm. The event will be held at the company's conference hall, we will have games`,
      date: "20 Oct 2024",
      isRead: false,
      attachments: 0
    },
    {
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
}
