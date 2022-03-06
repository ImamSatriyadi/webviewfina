import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { UploadDokumenComponent } from './components/upload-dokumen/upload-dokumen.component';
import { FormDataPribadiComponent } from './components/form-data-pribadi/form-data-pribadi.component';
import { DataJaminanComponent } from './components/data-jaminan/data-jaminan.component';
import { ListKontrakComponent } from './components/list-kontrak/list-kontrak.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { PerhitunganComponent } from './components/perhitungan/perhitungan.component';
import { SuccessPageComponent } from './components/success-page/success-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    UploadDokumenComponent,
    FormDataPribadiComponent,
    DataJaminanComponent,
    ListKontrakComponent,
    PerhitunganComponent,
    SuccessPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
