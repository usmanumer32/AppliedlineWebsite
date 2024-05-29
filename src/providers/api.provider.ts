import { Injectable } from '@angular/core';

@Injectable()
export class ApiProvider {
	readonly apiServer = 'https://appliedline.com/';
	readonly apiBaseUrl = this.apiServer + 'appliedlineapi/';

	readonly apiUrl = this.apiBaseUrl + 'api/v1/';
}
