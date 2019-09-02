import { Component, OnInit } from '@angular/core';
import { UserServiceService } from "../services/user-service.service";
import { User } from '../user';
import { Reporsitory } from '../reporsitory';

import { Router } from '@angular/router';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  // goToUrl(id){
  //   this.router.navigate(['/view',id])
  // }
  
  // constructor(public repoService: UserServiceService,  private router:Router) {}
  // ngOnInit() {  }
  // }

  prompt:string;
  pop:User;
  repos:Reporsitory[];
    constructor(private githubRequestService:UserServiceService) { }
  
    ngOnInit() {
    }
    functionsearch(art){
      this.githubRequestService.githubRequest(art)
      this.pop=this.githubRequestService.user
      this.githubRequestService.repositoryRequest(art)
      this.repos=this.githubRequestService.repository
      console.log(this.repos)
    }
    
  }
  