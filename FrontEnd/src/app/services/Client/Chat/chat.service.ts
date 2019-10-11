import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Chat } from 'src/app/models/Client/Chat';
import { chatData } from 'src/app/data/Client/data';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor() { }

  Get():Observable<Chat[]>{
    return of(chatData);
  }

  Send(message:string){
    chatData.push({
      message: message,
      sent: true,
      color: 'white',
      background: 'black',
      size: '15px',
      image: 'http://emilcarlsson.se/assets/mikeross.png',
      name: 'duy'
    });
  }
}
