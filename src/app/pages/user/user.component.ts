import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
    constructor(private route: ActivatedRoute, private location: Location) {}

    private id: string;
    ngOnInit() {
        this.route.params.subscribe((params) => this.id = params.id);
    }

    goBack(): void {
        this.location.back();
    }
}
