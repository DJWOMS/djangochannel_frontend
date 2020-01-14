import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    visibility: string;
    constructor() {
    }

    ngOnInit() {
    }

    toggle(id: string): void {
        this.visibility = id;
        console.log(typeof this.visibility, typeof id, this.visibility);
    }
}
