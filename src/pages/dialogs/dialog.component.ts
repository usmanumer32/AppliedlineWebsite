import { Component, Input } from '@angular/core';


@Component({
	selector: 'app-dialog',
	templateUrl: './dialog.component.html',
	styleUrls: ['./dialog.component.css']
})
/**
 * DialogComponent class
 *
 * @whatItDoes Displays a modal with message specified.
 *
 * @stable
 */
export class DailogComponent {

	@Input() dialogMessage: string;
	@Input() showDialog: boolean;

	/**
	 * Component function
	 *
	 * @whatItDoes Close the dialog window
	 *
	 * @stable
	 */
	close() {
		this.showDialog = false;
	}
}
