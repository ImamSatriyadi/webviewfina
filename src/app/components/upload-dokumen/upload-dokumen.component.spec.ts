import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadDokumenComponent } from './upload-dokumen.component';

describe('UploadDokumenComponent', () => {
  let component: UploadDokumenComponent;
  let fixture: ComponentFixture<UploadDokumenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadDokumenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadDokumenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
