import { Component, OnInit } from '@angular/core';
import { CommunicationService } from './../../services/communication.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  userList:Array<Object>;

  constructor(private communicationService: CommunicationService) { }

  ngOnInit() {
      this.communicationService.getUsers().subscribe((data)=>{
       this.userList = data;
       console.log(this.userList);
      });
  }

}
