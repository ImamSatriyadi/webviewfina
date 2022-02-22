import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataJaminanComponent } from './components/data-jaminan/data-jaminan.component';
import { FormDataPribadiComponent } from './components/form-data-pribadi/form-data-pribadi.component';
import { MainComponent } from './components/main/main.component';
import { UploadDokumenComponent } from './components/upload-dokumen/upload-dokumen.component';

const routes: Routes = [
  {path : '', redirectTo: '/main', pathMatch :'full'},
  {path : 'main', component : MainComponent},
  {path : 'upload_dokumen', component : UploadDokumenComponent},
  {path : 'form_data_pribadi', component : FormDataPribadiComponent},
  {path : 'data_jaminan', component : DataJaminanComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
