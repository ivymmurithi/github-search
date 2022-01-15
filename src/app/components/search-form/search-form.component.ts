import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/classes/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

    public users:any[]=[];
    public repos:any[]=[];

    constructor(private userService: UserService) { }

    search(searchedUser:any) {
      if(searchedUser !== '') {
        this.userService.getUser(searchedUser)
        // this.userService.getRepos(searchedUser)
        .subscribe((response: any) => {
          this.users.push(response);
          console.log(response);
        });
        if(searchedUser !== '') {
          this.userService.getRepos(searchedUser)
          .subscribe((response:any) => {
            this.repos = response;
            console.log(response);
          })
        }
      }
    }


  ngOnInit(): void { }  
  

}
