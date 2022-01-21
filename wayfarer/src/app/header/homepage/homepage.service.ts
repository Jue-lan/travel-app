import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HomepageService {
  cityList: any;

  constructor(private http: HttpClient) {}

  findPosts(value: any) {
    this.http.get('assets/data.json').subscribe((data) => {
      this.cityList = data;
      this.cityList.map((city: any) => {
        city.posts.map((posts: any) => {
          if (posts.title.includes(value)) {
            console.log(posts);
          }
        });
      });
    });
  }
}
