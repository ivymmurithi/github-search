import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-display-github-user',
  templateUrl: './display-github-user.component.html',
  styleUrls: ['./display-github-user.component.css']
})
export class DisplayGithubUserComponent implements OnInit {

  // displayed: any[] =[];

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    // this.userService.displayUsers()
    // .subscribe((response: any) => {
    //   this.displayed = response;
    //   console.log(response)
    // })
  }

}
