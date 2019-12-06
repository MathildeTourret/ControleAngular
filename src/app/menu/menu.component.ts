import { Component, OnInit } from '@angular/core';
import { ChatServiceService } from '../chat-service.service';
import { Channel } from '../channel';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  channels: Channel[];

  constructor(public chatService: ChatServiceService) { }

  ngOnInit() {
    this.chatService.getChannels().subscribe(
      (channels: Channel[]) => this.channels = channels)
  }

}
