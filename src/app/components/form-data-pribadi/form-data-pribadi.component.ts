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
  mail:string="";
  noKontrak:string="null";
  lnama:any;
  lnik:any;
  lalamat:any;
  lprovinsi:any;
  lkodepos:any;
  lkota:any;
  lnotelp1:any;
  lnotelp2:any;
  lemail:any;
  lnorek:any;
  lketerangan:any;
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
    this.mail= this.actRoute.snapshot.params['email'];
    this.noKontrak = this.actRoute.snapshot.params['id'];
    this.rollBack();
    this.lnama = localStorage.getItem('name');
    this.lnik = localStorage.getItem('nik');
    this.lalamat = localStorage.getItem('alamat');
    this.lemail = localStorage.getItem('email');
    this.lprovinsi = localStorage.getItem('provinsi');
    this.lkota = localStorage.getItem('kota');
    this.lkodepos = localStorage.getItem('kode_pos');
    this.lnotelp1 = localStorage.getItem('notelp1');
    this.lnotelp2 = localStorage.getItem('notelp2');
    this.lnorek = localStorage.getItem('no_rek_bca');
    this.lketerangan = localStorage.getItem('keterangan');
    
    this.dataPribadi.get('name')?.setValue(this.lnama);
    this.dataPribadi.get('nik')?.setValue(this.lnik);
    this.dataPribadi.get('alamat')?.setValue(this.lalamat);
    this.dataPribadi.get('provinsi')?.setValue(this.lprovinsi);
    this.dataPribadi.get('kota')?.setValue(this.lkota);
    this.dataPribadi.get('noTelp1')?.setValue(this.lnotelp1);
    this.dataPribadi.get('noTelp2')?.setValue(this.lnotelp2);
    this.dataPribadi.get('email')?.setValue(this.lemail);
    this.dataPribadi.get('norek')?.setValue(this.lnorek);
    this.dataPribadi.get('kode_pos')?.setValue(this.lkodepos);
    this.dataPribadi.get('keterangan')?.setValue(this.lketerangan);
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
    const kodepos   = this.dataPribadi.get('kode_pos')?.value;

    return this.apiservice.addNewCustomer(nama, nik, alamat, provinsi,
      kota, kabupaten, noTelp1,
      noTelp2, email, no_rek_bca, 
      keterangan, "not-commit", this.noKontrak)
      .subscribe(
        data => {
            localStorage.setItem('name', nama);
            localStorage.setItem('nik', nik);
            localStorage.setItem('email', email);
            localStorage.setItem('alamat', alamat);
            localStorage.setItem('provinsi', provinsi);
            localStorage.setItem('kota', kota);
            localStorage.setItem('kode_pos', kodepos);
            localStorage.setItem('notelp1', noTelp1);
            localStorage.setItem('notelp2', noTelp2);
            localStorage.setItem('no_rek_bca', no_rek_bca);
            localStorage.setItem('keterangan', keterangan);
            this.route.navigate(["/upload_dokumen/", this.noKontrak, this.mail]);
        }
      );
  }

  rollBack(){
    return this.apiservice.rollBack()
    .subscribe((res:any)=>{

      })
  }
}
