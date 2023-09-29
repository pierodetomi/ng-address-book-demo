import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildSampleComponent } from './view-child-sample.component';

describe('ViewChildSampleComponent', () => {
  let component: ViewChildSampleComponent;
  let fixture: ComponentFixture<ViewChildSampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewChildSampleComponent]
    });
    fixture = TestBed.createComponent(ViewChildSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
