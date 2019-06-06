import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';

@Injectable()
export class GithubRestApiService {

  public gitUsersData: any;
  public gitUserDetails: any;

  constructor(private httpService: Http) {

  }

  //method to fetch Github users data from REST Api by making http request
  getGithubUsersByName(searchName) {
    return new Promise(resolve => {
      this.httpService.get("https://api.github.com/search/users?q=" + searchName)
        .pipe(map(resp => resp.json()))
        .subscribe(tempdata => {
          this.gitUsersData = tempdata;
          resolve(this.gitUsersData);
        });
    });
  }


  //method to fetch Githb users data from REST Api by making http request
  getGithubUserDetails(userTrueName) {
    return new Promise(resolve => {
      console.log(userTrueName);
      this.httpService.get("https://api.github.com/users/" + userTrueName + "/repos")
        .pipe(map(resp => resp.json()))
        .subscribe(tempdata => {
          this.gitUserDetails = tempdata;
          resolve(this.gitUserDetails);
        });
    });
  }

}
