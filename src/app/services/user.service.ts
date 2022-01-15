import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }


  displayUsers() {
    return this.http.get('https://api.github.com/users')
  }

  getUser(searchedUser:any) {
    return this.http.get(`https://api.github.com/users/${searchedUser}`)
  }

  getRepos(searchedUser:any) {
    return this.http.get(`https://api.github.com/users/${searchedUser}/repos`)
  }

}
