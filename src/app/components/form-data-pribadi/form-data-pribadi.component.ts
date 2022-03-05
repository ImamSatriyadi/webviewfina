import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from 'src/app/shared/api-service.service';

@Component({
  selector: 'app-form-data-pribadi',
  templateUrl: './form-data-pribadi.component.html',
  styleUrls: ['./form-data-pribadi.component.css']
})
export class FormDataPribadiComponent implements OnInit {

  noKontrak:string="null";
  
  constructor(private apiservice:ApiServiceService, private actRoute : ActivatedRoute, private route:Router) { }
  
  dataPribadi = new FormGroup({
    name      : new FormControl('', [Validators.required]),
    nik       : new FormControl('', [Validators.required, Validators.minLength(16)]),
    alamat    : new FormControl('', [Validators.required]),
    provinsi  : new FormControl('', [Validators.required]),
    kota      : new FormControl('', [Validators.required]),
    kode_pos  : new FormControl('', [Validators.required]),
    noTelp1   : new FormControl('', [Validators.required, Validators.minLength(11)]),
    noTelp2   : new FormControl('', [Validators.minLength(11)]),
    email     : new FormControl('', [Validators.required,Validators.email]),
    norek     : new FormControl('', [Validators.minLength(10)]),
    keterangan: new FormControl('', [])
  });


  ngOnInit(): void {
    this.noKontrak = this.actRoute.snapshot.params['id'];
    this.rollBack();
  }

  get name(){
    return this.dataPribadi.get('name');
  }

  get nik(){
    return this.dataPribadi.get('nik');
  }

  get alamat(){
    return this.dataPribadi.get('alamat');
  }

  get provinsi(){
    return this.dataPribadi.get('provinsi');
  }

  get kota(){
    return this.dataPribadi.get('kota');
  }

  get kode_pos(){
    return this.dataPribadi.get('kode_pos');
  }
  
  get noTelp1(){
    return this.dataPribadi.get('noTelp1');
  }
  
  get noTelp2(){
    return this.dataPribadi.get('noTelp2');
  }
  
  get email(){
    return this.dataPribadi.get('email');
  }

  get norek(){
    return this.dataPribadi.get('norek');
  }

  get keterangan(){
    return this.dataPribadi.get('keterangan');
  }
  
  addCustomer(){
    const nama  = this.dataPribadi.get('name')?.value;
    const nik   = this.dataPribadi.get('nik')?.value;
    const alamat   = this.dataPribadi.get('alamat')?.value;
    const provinsi   = this.dataPribadi.get('provinsi')?.value;
    const kota   = this.dataPribadi.get('kota')?.value;
    const kabupaten   = this.dataPribadi.get('kota')?.value;
    const noTelp1   = this.dataPribadi.get('noTelp1')?.value;
    const noTelp2   = this.dataPribadi.get('noTelp2')?.value;
    const email   = this.dataPribadi.get('email')?.value;
    const no_rek_bca   = this.dataPribadi.get('norek')?.value;
    const keterangan   = this.dataPribadi.get('keterangan')?.value;

    return this.apiservice.addNewCustomer(nama, nik, alamat, provinsi,
      kota, kabupaten, noTelp1,
      noTelp2, email, no_rek_bca, 
      keterangan, "not-commit", this.noKontrak)
      .subscribe(
        data => {
            this.route.navigate(["/upload_dokumen/", this.noKontrak]);
        }
      );
  }

  rollBack(){
    return this.apiservice.rollBack()
    .subscribe((res:any)=>{

      })
  }
}
