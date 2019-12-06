import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Channel } from './channel';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {

  constructor(private http: HttpClient) { }

  getChannels(): Observable<Channel[]>{
    return this.http.get<Channel[]>(`${environment.backUrl}channels`)
  }

  
  getMessages(): Observable<Message[]>{
    return this.http.get<Message[]>(`${environment.backUrl}messages`)
  }

  refreshMessages(){
  
  }

  sendMessage(message: Message): Observable<Message> {
    return this.http.post<Message>(`${environment.backUrl}messages`, message)
  }


}
