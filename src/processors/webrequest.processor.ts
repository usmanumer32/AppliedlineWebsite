import { Injectable } from '@angular/core';
import { IWebRequestProcessor } from '../interfaces/webrequest.processor.interface';
import { WebRequestProvider } from '../providers/webrequest.provider';
import { HelperProvider } from '../providers/helper.provider';
import { IWebContact } from '../interfaces/webcontact.interface';

@Injectable()
export class WebRequestProcessor implements IWebRequestProcessor {

	/**
	 *
	 */
	constructor(private request: WebRequestProvider,
		private helper: HelperProvider
	) {
	}

	sendRequest(webcontact: IWebContact): Promise<IWebContact> {

		if (webcontact.ContactName.length === 0
			|| !this.helper.emailIsValid(webcontact.Email)
			|| !this.helper.phoneIsValid(webcontact.Phone)
			|| webcontact.MessageText.length === 0
			|| webcontact.RequestType.length === 0
		) {
			throw new Error();
		}

		return new Promise<IWebContact>((resolve, reject) => {
			this.request.sendRequest(webcontact)
				.subscribe((data) => {
					resolve(data);
				}, (error) => {
					// error occured
					reject(error);
				});
		});
	}
}
