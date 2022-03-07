import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from 'src/app/shared/api-service.service';

@Component({
  selector: 'app-perhitungan',
  templateUrl: './perhitungan.component.html',
  styleUrls: ['./perhitungan.component.css']
})
export class PerhitunganComponent implements OnInit {
  data:any;
  noKontrak:string = "null";
  email:string="";


  constructor(private apiservice:ApiServiceService, private actRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.dataPerhitungan();
    this.noKontrak=this.actRoute.snapshot.params['id'];
    this.email= this.actRoute.snapshot.params['email'];
    this.rollBack();
  }

  dataPerhitungan(){
    return this.apiservice.dataPerhitungan(this.actRoute.snapshot.params['id'])
    .subscribe((res:any)=>{
          this.data = res;
          console.log(this.data);
      })
  }

  rollBack(){
    return this.apiservice.rollBack()
    .subscribe((res:any)=>{

      })
  }
}
