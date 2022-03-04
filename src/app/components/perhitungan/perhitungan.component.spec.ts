import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerhitunganComponent } from './perhitungan.component';

describe('PerhitunganComponent', () => {
  let component: PerhitunganComponent;
  let fixture: ComponentFixture<PerhitunganComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerhitunganComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerhitunganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
