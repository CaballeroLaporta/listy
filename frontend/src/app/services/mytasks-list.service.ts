import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { environment } from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class MytasksListService {

  private tasks: any;
  private tasksChange: Subject<any> = new Subject();

  private baseURL = environment.baseURL + 'api/tasks';

  tasksChange$: Observable<any> = this.tasksChange.asObservable();

  constructor(private httpClient: HttpClient) { }

  private setTasks(tasks: any) {
    this.tasks = tasks;
    this.tasksChange.next(tasks);
    return tasks;
  }

  getAll(): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.baseURL}`, options)
      .toPromise()
      .then((tasks) => {
        this.setTasks(tasks);
      })
  }

  getOne(id) {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.baseURL}/task-edit/${id}`,options)
    .toPromise();
  }
  
  creatOne(data) {
    const options = {
      withCredentials: true
    };
    return this.httpClient.post(`${this.baseURL}/create`, data, options)
    .toPromise()
    .then(() => {
      this.getAll();
    });
    
  }

  updateOne(id,data) {
    const options = {
      withCredentials: true
    };
    return this.httpClient.put(`${this.baseURL}/${id}`,data, options)
    .toPromise()
    .then(() => {
      this.getAll();
    } );

  }

  deleteOne(id){
    const options = {
      withCredentials: true
    };
    return this.httpClient.delete(`${this.baseURL}/${id}`)
    .toPromise()
    .then(() => {
      this.getAll();
    });

  }

}
