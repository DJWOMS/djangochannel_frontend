import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../api.service';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
    postsTop: any;

    constructor(private http: ApiService) {
    }

    ngOnInit() {
        this.http.getBlogPostList().subscribe((response: Response) => {
            this.postsTop = response.results;
        });
    }

}

interface Response {
    count: number;
    next: null;
    previous: null;
    results: [
        {
            id: number,
            author: string,
            link: string,
            category: {
                name: string,
                description: string
            },
            tag: [
                {
                    name: string,
                    slug: string
                }
            ],
            comments_count: number,
            title: string,
            mini_text: string,
            published_date: string,
            image: null,
            viewed: number,
            description: string
        }
    ];
}
