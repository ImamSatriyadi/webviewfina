import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListKontrakComponent } from './list-kontrak.component';

describe('ListKontrakComponent', () => {
  let component: ListKontrakComponent;
  let fixture: ComponentFixture<ListKontrakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListKontrakComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListKontrakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
