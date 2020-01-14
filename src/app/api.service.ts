import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    baseUrl = 'http://127.0.0.1:8000';
    blogUrl = `${this.baseUrl}/api/v2/blog/`;
    constructor(private http: HttpClient) {
    }

    getBlogPostList(): Observable<any> {
        return this.http.get(this.blogUrl);
    }

    getBlogPost(slug): Observable<any> {
        return this.http.get(`${this.blogUrl}${slug}`);
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
