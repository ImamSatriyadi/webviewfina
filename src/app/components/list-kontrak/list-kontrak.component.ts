import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from 'src/app/shared/api-service.service';

@Component({
  selector: 'app-list-kontrak',
  templateUrl: './list-kontrak.component.html',
  styleUrls: ['./list-kontrak.component.css']
})
export class ListKontrakComponent implements OnInit {
  kontrak: any;

  constructor(private apiservice:ApiServiceService) { }

  ngOnInit(): void {
    this.listKontrak();
  }

  listKontrak(){
    return this.apiservice.listKontrak("imamsatriyadi.kunir.it@gmail.com")
    .subscribe((res:any)=>{
          this.kontrak = res;
          console.log(this.kontrak);
      })
  }
}
