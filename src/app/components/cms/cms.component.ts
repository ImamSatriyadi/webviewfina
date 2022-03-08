import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/shared/api-service.service';
@Component({
  selector: 'app-cms',
  templateUrl: './cms.component.html',
  styleUrls: ['./cms.component.css']
})
export class CmsComponent implements OnInit {
  data:any;
  no_kontrak:any;
  dataOldCustomer:any;

  datac:any;
  constructor(private apiservice:ApiServiceService, private router:Router) { }

  ngOnInit(): void {
    this.showData();
  }

  
  showData(){
    return this.apiservice.dataPengajuan()
    .subscribe((res:any)=>{
        this.data =  res;
        console.log(res);
    })
  }



  detail(id:number){
      console.log(id);
      return this.apiservice.getNoKontrak(id)
      .subscribe((res:any)=>{
          this.no_kontrak =  res;
          console.log(this.no_kontrak);
          this.router.navigate(['/cms-detail', id, this.no_kontrak]);
      })
  }
  changeStatus(status:string, id:number){
    return this.apiservice.getNoKontrak(id)
    .subscribe((res:any)=>{
        this.no_kontrak =  res;
        this.apiservice.changeStatusPengajuan(status, this.no_kontrak)
        .subscribe((res:any)=>{
          window.location.reload();
        })
    })
  }
}
