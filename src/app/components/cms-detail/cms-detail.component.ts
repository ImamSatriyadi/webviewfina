import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from 'src/app/shared/api-service.service';

@Component({
  selector: 'app-cms-detail',
  templateUrl: './cms-detail.component.html',
  styleUrls: ['./cms-detail.component.css']
})
export class CmsDetailComponent implements OnInit {
  dataOldCustomer:any;
  dataDocument:any;
  dataPerhitungan:any;
  dataNewCustomer:any;
  no_kontak:string="";
  idNewCust:number=0;
  constructor(private apiservice:ApiServiceService, private actRoute:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.no_kontak= this.actRoute.snapshot.params['no_kontrak'];
    this.idNewCust= this.actRoute.snapshot.params['id'];
    this.getDataOldCustomer(this.no_kontak);
    this.getDataNewCustomer(this.idNewCust);
    this.getDataDocument(this.idNewCust);
    this.getDartaPerhitungan(this.no_kontak);
  }

  getDataOldCustomer(kontrak:string){
    return this.apiservice.getOldCustomer(kontrak)
    .subscribe((res:any)=>{
        this.dataOldCustomer =  res;
        console.log(this.dataOldCustomer);
    })
  }

  getDataNewCustomer(id:number){
    return this.apiservice.getNewCustomer(id)
    .subscribe((res:any)=>{
        this.dataNewCustomer =  res;
        console.log(this.dataNewCustomer);
    })
  }
  
  getDataDocument(id:number){
    return this.apiservice.getDocument(id)
    .subscribe((res:any)=>{
        this.dataDocument=  res;
        console.log(this.dataDocument);
    })
  }

  getDartaPerhitungan(no_kontrak:string){
      return this.apiservice.dataPerhitungan(no_kontrak)
      .subscribe((res:any)=>{
            this.dataPerhitungan = res;
            console.log(this.dataPerhitungan);
        })
    }
}
