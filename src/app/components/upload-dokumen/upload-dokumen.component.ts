import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from 'src/app/shared/api-service.service';

@Component({
  selector: 'app-upload-dokumen',
  templateUrl: './upload-dokumen.component.html',
  styleUrls: ['./upload-dokumen.component.css']
})
export class UploadDokumenComponent implements OnInit {
  noKontrak:string="null";
  selectedFilesKTP?: FileList;
  selectedFilesKTPPasangan?: FileList;
  selectedFilesKK?: FileList;
  selectedFilesNPWP?: FileList;
  selectedFilesSPOK?: FileList;
  selectedFilesSK?: FileList;

  constructor(private apiservice:ApiServiceService, private actRoute : ActivatedRoute) { }
  dokumen = new FormGroup({
    fileData  : new FormControl('', [Validators.required])
  });

  ngOnInit(): void {
    this.noKontrak = this.actRoute.snapshot.params['id'];
  }

  get fileData(){
    return this.dokumen.get('fileData')?.value;
  }

  selectFileKTP(event: any): void {
    this.selectedFilesKTP = event.target.files;
  }

  selectFileKTPPasangan(event: any): void {
    this.selectedFilesKTPPasangan = event.target.files;
  }

  selectFileKK(event: any): void {
    this.selectedFilesKK = event.target.files;
  }

  selectFileNPWP(event: any): void {
    this.selectedFilesNPWP = event.target.files;
  }
  
  selectFileSPOK(event: any): void {
    this.selectedFilesSPOK = event.target.files;
  }

  selectFileSK(event: any): void {
    this.selectedFilesSK = event.target.files;
  }

  uploadDokumen():void{
    if (this.selectedFilesKTP) {
    const file: File | null = this.selectedFilesKTP?.item(0);
    if(file){
    this.apiservice.upload(file, this.noKontrak)
      .subscribe(
        data => {
            // this.route.navigate(["/upload_dokumen/", this.noKontrak]);
        }
      );
   }}
   
  if (this.selectedFilesKTPPasangan) {
    const file: File | null = this.selectedFilesKTPPasangan?.item(0);
    if(file){
    this.apiservice.upload(file, this.noKontrak)
      .subscribe(
        data => {
            // this.route.navigate(["/upload_dokumen/", this.noKontrak]);
        }
      );
   }}

  if (this.selectedFilesKK) {
    const file: File | null = this.selectedFilesKK?.item(0);
    if(file){
    this.apiservice.upload(file, this.noKontrak)
      .subscribe(
        data => {
            // this.route.navigate(["/upload_dokumen/", this.noKontrak]);
        }
      );
   }}

  if (this.selectedFilesNPWP) {
    const file: File | null = this.selectedFilesNPWP?.item(0);
    if(file){
    this.apiservice.upload(file, this.noKontrak)
      .subscribe(
        data => {
            // this.route.navigate(["/upload_dokumen/", this.noKontrak]);
        }
      );
   }}
  
   if (this.selectedFilesSPOK) {
    const file: File | null = this.selectedFilesSPOK?.item(0);
    if(file){
    this.apiservice.upload(file, this.noKontrak)
      .subscribe(
        data => {
            // this.route.navigate(["/upload_dokumen/", this.noKontrak]);
        }
      );
   }}
  
   if (this.selectedFilesSK) {
    const file: File | null = this.selectedFilesSK?.item(0);
    if(file){
    this.apiservice.upload(file, this.noKontrak)
      .subscribe(
        data => {
            // this.route.navigate(["/upload_dokumen/", this.noKontrak]);
        }
      );
   }}
}
}
