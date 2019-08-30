import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import { UserServiceService } from "../services/user-service.service";


@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']

})
export class GithubComponent implements OnInit {

  title = 'Github';
  user: User;

  constructor(private githubService: UserServiceService) {
    // this.user = this.githubService.user;
  }
  ngOnInit() {
    this.githubService.userRequest()
    this.user= this.githubService.user
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