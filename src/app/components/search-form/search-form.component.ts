import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/classes/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

    public user:User[]=[];

  constructor(private userService: UserService) { }

  ngOnInit(): void { }

  search(searchedUser:any) {
    if(searchedUser !== '') {
      this.userService.getUser(searchedUser)
      .subscribe((response:any) => {
        this.user = response.data;
        console.log("data", response);
      })
    }
  }

}
