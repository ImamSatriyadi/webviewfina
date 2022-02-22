import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataJaminanComponent } from './data-jaminan.component';

describe('DataJaminanComponent', () => {
  let component: DataJaminanComponent;
  let fixture: ComponentFixture<DataJaminanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataJaminanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataJaminanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
