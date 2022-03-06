import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from 'src/app/shared/api-service.service';

@Component({
  selector: 'app-list-kontrak',
  templateUrl: './list-kontrak.component.html',
  styleUrls: ['./list-kontrak.component.css']
})
export class ListKontrakComponent implements OnInit {
  kontrak: any;
  selectContract:string="";
  email:string="";

  constructor(private apiservice:ApiServiceService, private actRoute:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.email=this.actRoute.snapshot.params['email'];
    this.listKontrak();
    this.rollBack();

    localStorage.clear();
  }

  listKontrak(){
    return this.apiservice.listKontrak(this.email)
    .subscribe((res:any)=>{
          this.kontrak = res;
          console.log(this.kontrak);
      })
  }

  changeParam(no_kontrak:string){
    this.selectContract = no_kontrak;
  }

  direct(contract:string){
    this.router.navigate(["/perhitungan/", contract, this.email]);
  }
  rollBack(){
    return this.apiservice.rollBack()
    .subscribe((res:any)=>{

      })
  }
}
