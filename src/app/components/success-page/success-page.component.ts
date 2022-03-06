import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-success-page',
  templateUrl: './success-page.component.html',
  styleUrls: ['./success-page.component.css']
})
export class SuccessPageComponent implements OnInit {
  email:string="";
  constructor(private actroute:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.email  = this.actroute.snapshot.params['email'];
  }

}
