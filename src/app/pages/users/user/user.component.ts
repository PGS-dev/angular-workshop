import { Component, Input } from '@angular/core';

@Component({
  selector: '.app-user-row',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  @Input()
  id:number;
  @Input()
  userName:string;
  @Input()
  name:string;
}
