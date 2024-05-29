import { Injectable } from '@angular/core';


@Injectable()
export class HelperProvider {

	urlIsValid(url: string): boolean {
		const regexUrl = /https?:\/\/[a-zA-Z]+.+\.[a-zA-Z]{2,}/;
		if (regexUrl.test(url)) {
			return true;
		}
		return false;
	}

	emailIsValid(email: string): boolean {
		const regexEmail = /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}/;
		return regexEmail.test(email);
	}

	phoneIsValid(phone: string): boolean {
		const regexPhone = /\+[1-9]{1,3}?[0-9]{9,11}/;
		return regexPhone.test(phone);
	}

	passwordComplexityPassed(password: string): boolean {
		const minMaxLength = /[\S]{6,32}/,
			upper = /[A-Z]/,
			lower = /[a-z]/,
			number = /[0-9]/,
			special = /[ !"#$%&'()*+,\-./:;<=>?@^]/;

		if (minMaxLength.test(password) &&
			upper.test(password) &&
			lower.test(password) &&
			number.test(password) &&
			special.test(password)
		) {
			return true;
		}
		return false;
	}
}
