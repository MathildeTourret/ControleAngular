import { Component, OnInit } from '@angular/core';
import { ChatServiceService } from '../chat-service.service';
import { Message } from '../message'

@Component({
  selector: 'app-chat-messages',
  templateUrl: './chat-messages.component.html',
  styleUrls: ['./chat-messages.component.sass']
})
export class ChatMessagesComponent implements OnInit {
  userName: string;
  messages: Message[] = [];
  content: string;
  constructor(public chatService: ChatServiceService) { }

  ngOnInit() {
    // this.chatService.getMessages.subscribe(
    //   (messages: Message[]) => this.messages = messages)
    this.refreshUser();
  }

  private refreshUser() {
    this.userName = localStorage.getItem('user');
  }


  sendMessages() {
    this.chatService.sendMessage({
      content: this.content,
      user: localStorage.getItem('user')
    }).subscribe( 
      (message: Message) => { this.messages.push(message)
    })
  }
}
