import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../user';
import { Reporsitory } from '../reporsitory';



@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  user: User;
  repository: Reporsitory[];
  constructor(private http: HttpClient) {
    this.repository = [];
    this.user = new User("", "","","", 0, new Date);
  }
  githubRequest(prompt) {
    interface ApiResponse {
      login: string,
      avatar_url: string,
      public_repos: number
    };

    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>("https://api.github.com/users/" + prompt + "?access_token=" + environment.key).toPromise().then(response => {
        this.user.login = response.login
        this.user.avatar_url = response.avatar_url
        this.user.public_repos = response.public_repos
        resolve()
      },
        error => {
          reject(error)
        })
    })
    return promise
  }
  repositoryRequest(prompt) {
    interface ApiResponse {
      name: string,
      description: string,
      created_at: Date,
    };

    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>("https://api.github.com/users/" + prompt + "/repos?access_token=" + environment.key).toPromise().then(response => {
        for (var p in response) {
          this.repository.push(new Reporsitory(response[p].name, response[p].description));
        }
        // console.log(this.repository)
        resolve()
      },
        error => {

          reject(error)
        })
    })
    return promise
  }
}

//   user: User;
//   repo: Reporsitory[];

//   constructor(private http: HttpClient) {
//     this.user = new User("", "", "", "", 0, new Date());
//     this.repo = [];
//   }

//   getProfileInfo(name) {
//     interface ApiResponse {
//       name: string;
//       login: string;
//       avatar_url: string;
//       public_repos: number;
//       html_url: string;
//       created_at: Date;
//     }
//     let promise = new Promise((resolve, reject) => {
//       this.http.get<ApiResponse>("https://api.github.com/users/" + name + "?access_token=" + environment.key).toPromise().then(response => {
//         this.user.name = response.name
//         this.user.login = response.login
//         this.user.avatar_url = response.avatar_url
//         this.user.public_repos = response.public_repos
//         this.user.html_url = response.html_url
//         this.user.created_at = response.created_at

//         resolve()
//       },
//         error => {

//           reject(error)
//         })
//     })
//     return promise
//   }

//   getMyProfile(id) {
//     interface ApiResponse { 
//       name: string;
//       description: string;

//     }
//     let promise = new Promise((resolve, reject) => {
//       this.http.get<ApiResponse>("https://api.github.com/users/"+ id + "repos?access_token=" + environment.key).toPromise().then(response => {
//         for(var i in response){this.repo.push(response[i])}
       
//         resolve()
//       },
//         error => {

//           reject(error)
//         })
//     })
//     return promise
//   }

// }
