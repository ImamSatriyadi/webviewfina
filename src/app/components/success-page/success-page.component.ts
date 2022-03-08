import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from 'src/app/shared/api-service.service';

@Component({
  selector: 'app-success-page',
  templateUrl: './success-page.component.html',
  styleUrls: ['./success-page.component.css']
})
export class SuccessPageComponent implements OnInit {
  email:string="";
  id:any;
  constructor(private apiservice:ApiServiceService,private actroute:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.email  = this.actroute.snapshot.params['email'];
    this.showId(this.actroute.snapshot.params['id'])
  }

  showId(no_kontrak:string){
    return this.apiservice.getIdNewCustomer(no_kontrak)
    .subscribe((res:any)=>{
      this.id=res;
      })
  }

}
