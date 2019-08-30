import { Component, OnInit } from '@angular/core';
import { User } from '../user';
// import { GithubComponent } from 'github/github.component';
import { UserServiceService } from "../services/user-service.service";
import { Reporsitory } from '../reporsitory';
// import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']

})
export class GithubComponent implements OnInit {

  repoService: UserServiceService;
  title = 'Github';
  user: User;
  repos: Reporsitory[];

  constructor(private githubService: UserServiceService,private router:ActivatedRoute) {
    // this.user = this.githubService.user;
  }

  ngOnInit() {
    // this.githubService.getProfileInfo(name)
    // this.repoService.getRepoInfo(name)

    let id = this.router.snapshot.paramMap.get("id");
    this.githubService.getProfileInfo(id)

    this.user = this.githubService.user
    this.repos = this.githubService.repo
  }
}