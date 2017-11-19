import { GithubFollowerService } from './../service/github-follower.service';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';



@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any[];
  errorMessage: String;
  constructor(private service: GithubFollowerService) { }


  ngOnInit() {
    this.service.get()
      .subscribe(
      followers => this.followers = followers,
      error => this.errorMessage = error

      );
  }

}
