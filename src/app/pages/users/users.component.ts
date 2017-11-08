interface UserDataObject {
  id: Number,
  name:String
};

import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material';
import { CommunicationService } from './../../services/communication.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  userList:Array<UserDataObject>;
  sortedData;

  constructor(private communicationService: CommunicationService) { }

  ngOnInit() {
      this.communicationService.getUsers().subscribe((data)=>{
       this.userList = data;
       console.log(this.userList);
      });
  }

  sortData(sort: Sort) {
    this.sortedData = this.userList.sort((a, b) => {
      let isAscending = sort.direction == 'asc';
      switch(sort.active) {
        case 'id':
          return compare(a.id, b.id, isAscending);
        case 'name':
          return compare(a.name, b.name, isAscending);
      }
    });

    function compare(a, b, isAsc) {
      return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
  }
}
