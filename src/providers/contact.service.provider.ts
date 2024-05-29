import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class ContactServiceProvider {

	private messageSource = new BehaviorSubject('');
	currentMessage = this.messageSource.asObservable();

	constructor() { }

	updateMessage(message: string) {
		this.messageSource.next(message);
	}
}
