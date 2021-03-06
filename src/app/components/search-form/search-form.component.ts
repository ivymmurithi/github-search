import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/classes/user';
import { Repository } from 'src/app/classes/repository';
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
      	.subscribe((response: any) => {
        this.users.push(response);
    });

    if(searchedUser !== '') {
        this.userService.getRepos(searchedUser)
        .subscribe((response:any) => {
        this.repos = response;
    });
      }
    }
}


  ngOnInit(): void { }  
  

}
