import { Injectable } from '@angular/core';


@Injectable()
export class ConstantsProvider {

	readonly SUBJECT = 'Subject';
	readonly PROJECT = 'Project';
	readonly PURCHASE = 'Purchase';
	readonly INQUIRY = 'Inquiry';
	readonly QUOTE = 'Quote';
	readonly OTHERS = 'Others';

	readonly MESSAGE_CONTACT_REQUEST_SUCCESS = 'Glad to have you on-board.'
		+ ' Take your time to surf our site, you may find some other interests.';
	readonly MESSAGE_CONTACT_REQUEST_ERROR = 'Oops! Something terribly went wrong.';

}
