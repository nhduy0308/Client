import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/Client/Chat/chat.service';
import { Chat } from 'src/app/models/Client/Chat';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  chats: Chat[];
  text: string = '';
  constructor(private service: ChatService) { }

  ngOnInit() {
    this.service.Get().subscribe(chat => this.chats = chat);
  }

  onSend(){
    this.service.Send(this.text);
  }

  onEnter(){
    if(!this.text)return;
    if(this.text.length > 100) return;
    this.onSend();
    this.text = '';

  }

}
