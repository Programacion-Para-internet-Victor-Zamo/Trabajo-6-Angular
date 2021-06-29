import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message); // one to add() a message to the cache
  }

  clear() {
    this.messages = []; //  clear() the cache.
  }
}
