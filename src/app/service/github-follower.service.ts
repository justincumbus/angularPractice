import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
@Injectable()
export class GithubFollowerService extends DataService {

  constructor(http: Http) {
    super(http , 'https://api.github.com/users/mosh-hamedani/followers');
}
}
