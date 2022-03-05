import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/shared/api-service.service';

@Component({
  selector: 'app-list-kontrak',
  templateUrl: './list-kontrak.component.html',
  styleUrls: ['./list-kontrak.component.css']
})
export class ListKontrakComponent implements OnInit {
  kontrak: any;
  selectContract:string="";

  constructor(private apiservice:ApiServiceService, private router:Router) { }

  ngOnInit(): void {
    this.listKontrak();
    this.rollBack();
  }

  listKontrak(){
    return this.apiservice.listKontrak("imamsatriyadi.kunir.it@gmail.com")
    .subscribe((res:any)=>{
          this.kontrak = res;
          console.log(this.kontrak);
      })
  }

  changeParam(no_kontrak:string){
    this.selectContract = no_kontrak;
  }

  direct(contract:string){
    this.router.navigate(["/perhitungan/", contract]);
  }
  rollBack(){
    return this.apiservice.rollBack()
    .subscribe((res:any)=>{

      })
  }
}
