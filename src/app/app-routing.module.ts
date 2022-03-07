import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CmsDetailComponent } from './components/cms-detail/cms-detail.component';
import { CmsComponent } from './components/cms/cms.component';
import { DataJaminanComponent } from './components/data-jaminan/data-jaminan.component';
import { FormDataPribadiComponent } from './components/form-data-pribadi/form-data-pribadi.component';
import { ListKontrakComponent } from './components/list-kontrak/list-kontrak.component';
import { MainComponent } from './components/main/main.component';
import { PerhitunganComponent } from './components/perhitungan/perhitungan.component';
import { SuccessPageComponent } from './components/success-page/success-page.component';
import { UploadDokumenComponent } from './components/upload-dokumen/upload-dokumen.component';

const routes: Routes = [
  {path : '', redirectTo: '/main', pathMatch :'full'},
  {path : 'main/:email', component : MainComponent},
  {path : 'list_kontrak/:email', component : ListKontrakComponent},
  {path : 'upload_dokumen/:id/:email', component : UploadDokumenComponent},
  {path : 'perhitungan/:id/:email', component : PerhitunganComponent},
  {path : 'form_data_pribadi/:id/:email', component : FormDataPribadiComponent},
  {path : 'data_jaminan/:id/:email', component : DataJaminanComponent},
  {path : 'success/:email', component : SuccessPageComponent},
  {path : 'cms', component : CmsComponent},
  {path : 'cms-detail/:id/:no_kontrak', component : CmsDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
