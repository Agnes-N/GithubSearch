import { Component, OnInit } from '@angular/core';
import { UserServiceService } from "../services/user-service.service";
// import { Reporsitory } from '../reporsitory';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  goToUrl(id){
    this.router.navigate(['/view',id])
  }
  
  constructor(private githubService: UserServiceService, public repoService: UserServiceService,  private router:Router) {}
  ngOnInit() {}
}
