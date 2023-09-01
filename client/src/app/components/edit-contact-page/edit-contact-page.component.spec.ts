import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditContactPageComponent } from './edit-contact-page.component';

describe('AddContactPageComponent', () => {
  let component: EditContactPageComponent;
  let fixture: ComponentFixture<EditContactPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditContactPageComponent]
    });
    fixture = TestBed.createComponent(EditContactPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
