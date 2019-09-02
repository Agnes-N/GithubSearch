import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { UserServiceService } from "../services/user-service.service";
import { Reporsitory } from '../reporsitory';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']

})
export class GithubComponent implements OnInit {

  user:User;


  constructor(private http:HttpClient, private githubService:UserServiceService){
   this
  }
  ngOnInit() {
    interface ApiResponse{
      // user:string;

    }
    this.githubService.githubRequest(prompt)
    this.user=this.githubService.user
  }
   
}

  // repoService: UserServiceService;
//   title = 'Github';
//   user: User;
//   repos: Reporsitory[];

//   constructor(private githubService: UserServiceService,private router:ActivatedRoute) {
//   }

//   ngOnInit() {

//     let id = this.router.snapshot.paramMap.get("id");
//     this.githubService.getProfileInfo(id)

//     this.user = this.githubService.user
//     this.repos = this.githubService.repo
    
//   }
// }