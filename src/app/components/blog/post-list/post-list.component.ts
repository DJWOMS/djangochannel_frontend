import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../../api.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

    posts: any;

    constructor(private http: ApiService) {
    }

    ngOnInit() {
        this.http.getBlogPostList().subscribe((response) => {
            this.posts = response.results;
            console.log(response);
        });
    }

}
