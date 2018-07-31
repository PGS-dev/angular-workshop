import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';

@Component({
  selector: 'aw3-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() classes: string;
  @Input() text: string;
  @Input() isButton: boolean;
  @Input() link: string | null;
  @Input() routerLink: string;
  @Output() onClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  public handleClick(event: any) {
    this.onClick.emit(event);
  }
}
