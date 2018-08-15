import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MytasksListService {

  private baseURL = environment.baseURL + 'api/tasks';

  constructor(private httpClient: HttpClient) { }


  getAll(): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`http://localhost:3000/api/tasks`, options).toPromise();
  }

  getOne(id) {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.baseURL}/${id}`)
    .toPromise();
  }
  
  creatOne(data) {
    const options = {
      withCredentials: true
    };
    return this.httpClient.post(`${this.baseURL}/create`, data, options)
    .toPromise();
    
  }

  modifyOne(id) {

  }

  deleteOne(id){

  }








}
