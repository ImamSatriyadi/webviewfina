import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataJaminanComponent } from './components/data-jaminan/data-jaminan.component';
import { FormDataPribadiComponent } from './components/form-data-pribadi/form-data-pribadi.component';
import { ListKontrakComponent } from './components/list-kontrak/list-kontrak.component';
import { MainComponent } from './components/main/main.component';
import { PerhitunganComponent } from './components/perhitungan/perhitungan.component';
import { UploadDokumenComponent } from './components/upload-dokumen/upload-dokumen.component';

const routes: Routes = [
  {path : '', redirectTo: '/main', pathMatch :'full'},
  {path : 'main', component : MainComponent},
  {path : 'list_kontrak', component : ListKontrakComponent},
  {path : 'upload_dokumen/:id', component : UploadDokumenComponent},
  {path : 'perhitungan/:id', component : PerhitunganComponent},
  {path : 'form_data_pribadi/:id', component : FormDataPribadiComponent},
  {path : 'data_jaminan/:id', component : DataJaminanComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
