import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from 'src/app/shared/api-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  email:string="";
  constructor(private apiservice:ApiServiceService, private actRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.rollBack();
    this.email= this.actRoute.snapshot.params['email'];
    localStorage.clear();
  }

  rollBack(){
    return this.apiservice.rollBack()
    .subscribe((res:any)=>{

      })
  }
}
