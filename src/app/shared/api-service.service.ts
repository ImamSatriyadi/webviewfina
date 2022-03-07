import { HttpClient, HttpErrorResponse, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';


const DOMAIN_API = 'https://fina-overkredit-api.herokuapp.com/fina_overkredit/api';
const header    = {
    headers : new HttpHeaders({'Content-type' : 'application/json' })
}
const headerUpload = {
    headers: new HttpHeaders({ 'Content-Type': 'multipart/form-data' }),
  }

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  
  
  constructor(private http:HttpClient) { }

  listKontrak(email:string){
    let URL_API  = DOMAIN_API+"/csf/data?email="+email;
    return this.http.get(URL_API, header)
  }

  dataPerhitungan(no_kontrak:string){
    let URL_API  = DOMAIN_API+"/csf/perhitungan?no_kontrak="+no_kontrak;
    return this.http.get(URL_API, header)
  }

  dataPengajuan(){
    let URL_API  = DOMAIN_API+"/newcustomer/showData";
    return this.http.get(URL_API, header)
  }
  getNoKontrak(id:number){
    let URL_API  = DOMAIN_API+"/newcustomer/getNoKontrak?id_new_customer="+id;
    return this.http.get(URL_API, header)
  }
  getOldCustomer(no_kontrak:string){
    let URL_API  = DOMAIN_API+"/csf/showDataById?no_kontrak="+no_kontrak;
    return this.http.get(URL_API, header)
  }
  getNewCustomer(id:number){
    let URL_API  = DOMAIN_API+"/newcustomer/showDataById?id_new_customer="+id;
    return this.http.get(URL_API, header)
  }
  getDocument(id:number){
    let URL_API  = DOMAIN_API+"/newcustomer/showDataDocument?id_new_customer="+id;
    return this.http.get(URL_API, header)
  }
  
  //  uploadFile(file:File, no_kontrak:string){
  //    let URL_API  = DOMAIN_API+"/newcustomer/upload";
  //    return this.http.post(URL_API,
  //      {
  //        file, no_kontrak
  //      }, header)
  //    .pipe(catchError(this.handlerError))
  //  }

 
  upload(file: File, nameDoc:string, no_kontrak:string): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    formData.append('nameDoc', nameDoc);
    formData.append('no_kontrak', no_kontrak);
    const req = new HttpRequest('POST', `${DOMAIN_API}/newcustomer/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req);
  }

  rollBack(){
    let URL_API  = DOMAIN_API+"/newcustomer/rollBack";
    return this.http.get(URL_API, header)
  }

  addNewCustomer(nama:string, nik:string, alamat:string, provinsi:string,
     kota:string, kabupaten:string, no_telp:string,
     no_telp2:string, email:string, no_rek_bca:string, 
     keterangan:string, status_apply:string, no_kontrak:string):Observable<any>{
      let URL_API  = DOMAIN_API+"/newcustomer/add";
      return this.http.post(URL_API, {
        nama, nik, alamat, provinsi,
        kota, kabupaten, no_telp,
        no_telp2, email, no_rek_bca, 
        keterangan, status_apply, no_kontrak
      }, header)
      .pipe(catchError(this.handlerError));
  }

  handlerError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}
