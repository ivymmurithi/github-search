import { Component, Input, OnInit } from '@angular/core';
import { DatePipePipe } from 'src/app/pipes/date-pipe.pipe';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  @Input() user:any;
  myDate: Date = new Date();

  ngOnInit(): void {
  }


}
