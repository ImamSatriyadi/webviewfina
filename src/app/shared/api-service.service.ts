import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


const DOMAIN_API = 'http://localhost:8081/fina_overkredit/api';
const header    = {
    headers : new HttpHeaders({'Content-type' : 'application/json'})
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

}
