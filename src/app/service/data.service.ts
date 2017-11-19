import { BadRequestError } from './../common/badRequest-error';
import { AppError } from './../common/app-error';
import { NotFoundError } from './../common/not-found-error';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/observable/throw'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';


@Injectable()
export class DataService {
 private url ;

 constructor(private http: Http, url: String) {
     this.url = url;


 }


 get() {


  return this.http.get(this.url)
    .map(response => response.json())
    .catch(this.handleError);

 }

 delete(id) {
  return this.http.get(this.url + '/' + id)
   .map(response => response.json())
   .catch((error: Response) => {

    if (error.status === 404) {
     return Observable.throw(new NotFoundError());
    } else {
     return Observable.throw(new AppError(error));
    }
   });
 }

 create(resource) {
  return this.http.post(this.url, JSON.stringify(resource))
   .map(response => response.json())
   .catch(this.handleError)
   };


 update(resource) {
  return this.http.patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true })).map(response => response.json())

 }

  private handleError(error: Response) {
  if (error.status === 400) {
   return Observable.throw(new BadRequestError(error.json))

  } else {
   return Observable.throw(new AppError(error));
  }
 }
}
