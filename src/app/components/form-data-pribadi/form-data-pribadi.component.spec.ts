import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDataPribadiComponent } from './form-data-pribadi.component';

describe('FormDataPribadiComponent', () => {
  let component: FormDataPribadiComponent;
  let fixture: ComponentFixture<FormDataPribadiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDataPribadiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDataPribadiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
