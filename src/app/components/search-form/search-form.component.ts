import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/classes/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  users:User[]=[];

  constructor(private userService: UserService) { }

  ngOnInit(): void { }

  search(searchedUser:any) {
    if(searchedUser !== '') {
      this.userService.getUser(searchedUser)
      .subscribe((response: any) => {
       return this.users = response.data;
        // console.log("data" , response);
      });
    }
  }

}
