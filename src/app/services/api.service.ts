import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly URLJOBS = "https://5f3f012c13a9640016a69302.mockapi.io/jobs"
   private readonly URLPEOPLE = "https://5f3f012c13a9640016a69302.mockapi.io/users"

  constructor(private http : HttpClient) { }

  getJobs():Observable<any>{
    return this.http.get(`${this.URLJOBS}`)
  }

  getPeoples():Observable<any>{
    return this.http.get(`${this.URLPEOPLE}`)
  }
  getDataUaer(user: any){


    
     const data ={
       name: user.name,
       country : user.country

     }
     return this.http.get(`${this.URLPEOPLE}`)
  }
}
