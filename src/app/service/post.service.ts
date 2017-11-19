import { DataService } from './data.service';
import { BadRequestError } from './../common/badRequest-error';
import { AppError } from './../common/app-error';
import { NotFoundError } from './../common/not-found-error';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/observable/throw'
import { Observable } from 'rxjs/Observable'

@Injectable()
export class PostService extends DataService {


 constructor(http: Http) {
     super(http , 'https://jsonplaceholder.typicode.com/posts');
 }

 }
