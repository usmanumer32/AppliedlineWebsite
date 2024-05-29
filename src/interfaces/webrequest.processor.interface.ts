import { IWebContact } from './webcontact.interface';

export interface IWebRequestProcessor {
	sendRequest(webcontact: IWebContact): Promise<IWebContact>;
}
