import { Component, OnInit } from '@angular/core';
import { UserServiceService } from "../services/user-service.service";
import { User } from '../user';
import { Reporsitory } from '../reporsitory';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

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
  