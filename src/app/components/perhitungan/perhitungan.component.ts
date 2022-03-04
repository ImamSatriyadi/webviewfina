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
  constructor(private apiservice:ApiServiceService, private actRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.dataPerhitungan();
    this.noKontrak=this.actRoute.snapshot.params['id'];
  }

  dataPerhitungan(){
    return this.apiservice.dataPerhitungan(this.actRoute.snapshot.params['id'])
    .subscribe((res:any)=>{
          this.data = res;
          console.log(this.data);
      })
  }
}
