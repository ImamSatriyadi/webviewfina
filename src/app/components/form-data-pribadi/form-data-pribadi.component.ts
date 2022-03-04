import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from 'src/app/shared/api-service.service';

@Component({
  selector: 'app-form-data-pribadi',
  templateUrl: './form-data-pribadi.component.html',
  styleUrls: ['./form-data-pribadi.component.css']
})
export class FormDataPribadiComponent implements OnInit {

  noKontrak:string="null";
  constructor(private apiservice:ApiServiceService, private actRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.noKontrak = this.actRoute.snapshot.params['id'];
  }

}
