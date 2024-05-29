import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargocanalEventComponent } from '../cargocanal-event/cargocanal-event.component';

describe('ContentAreaComponent', () => {
	let component: CargocanalEventComponent;
	let fixture: ComponentFixture<CargocanalEventComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [CargocanalEventComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CargocanalEventComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
