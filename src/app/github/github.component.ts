import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import { GithubService } from "../g-service/github.service";
// import { Reporsitory } from '../reporsitory';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
  // providers: [GithubService]
})
export class GithubComponent implements OnInit {

  title = 'Github';
  user: User;

  constructor(private githubService: GithubService,public repoService: GithubService
  ) {
    this.user = this.githubService.user;
  }
  ngOnInit() {
    this.user = this.githubService.user;
  }






























  

  // repo : Reporsitory[];
  // profile: any[];
  // repos: any[];

  // constructor( private profileService: GithubService) {
  //   this.profileService.getProfileInfo().subscribe(profile => {
  //     console.log(profile);
      // this.profile = profile;
    // });
  // }

  // ngOnInit() {
  // }

}