import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApiService} from '../../../api.service';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
    post: object;
    params: object
    constructor(private http: ApiService, private res: ActivatedRoute) {
        res.params.subscribe(param => this.params = param);
    }

     ngOnInit() {
        this.http.getBlogPost(this.params.slug).subscribe((response) => {
            this.post = response;
        });
    }

}
