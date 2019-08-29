import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../user";
import { environment } from "../../environments/environment";
import { Reporsitory } from "../reporsitory";
import { NumberSymbol } from "@angular/common";

@Injectable({
  providedIn: "root" //we declare that this service should be created by the root application injector.
})
export class GithubService {
  repo: Reporsitory;
  user: User;

  private username: string;
  items;
  constructor(private http: HttpClient) {
    this.username = "Agnes-N";
    this.user = new User(" ", " ", " ", " ", 0,new Date());
    this.repo = new Reporsitory(" ", " ");
  }
  getProfileInfo(username) {
    interface ApiResponse {
      name: string;
          login: string;
          avatar_url: string;
          public_repos: number;
      creation: Date;
    }
    const promise = new Promise((resolve, reject) => {
      this.http
        .get<ApiResponse>(
          "https://api.github.com/users/" +
            username +
            "?access_token=c66e9d396b3dbdb9b9a123947fca484041056014"
        )
        .toPromise()
        .then(profile => {
          this.user.name = profile.name;
          this.user.login = profile.login;
          this.user.avatar_url = profile.avatar_url;
          this.user.public_repos = profile.public_repos;
          // this.user.html_url = profile.html_url;
          this.user.creation = profile.creation;

          console.log(profile);
          resolve();
        });
    });
    return promise;
  }
  getRepoInfo(username) {
    interface ApiResponse {
      name: string;
      homepage: string;
      description: string;
      html_url: string;
    }
    this.http
      .get<ApiResponse>(
        "https://api.github.com/users/" +
          username +
          "/repos?access_token=c66e9d396b3dbdb9b9a123947fca484041056014"
      )
      .subscribe(response => {
        this.items = response;
      });
  }
}
