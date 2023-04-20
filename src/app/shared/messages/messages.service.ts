import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Message } from './message.model';

@Injectable()
export class MessagesService {
  private subject = new BehaviorSubject<Message[]>([]);

  errors$: Observable<Message[]> = this.subject
    .asObservable()
    .pipe(filter((messages) => messages && messages.length > 0));

  showMessage(...errors: Message[]) {
    this.subject.next(errors);
  }
}
