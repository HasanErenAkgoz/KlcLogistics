import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestServicesComponent } from './request-services.component';

describe('RequestServicesComponent', () => {
  let component: RequestServicesComponent;
  let fixture: ComponentFixture<RequestServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestServicesComponent]
    });
    fixture = TestBed.createComponent(RequestServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
