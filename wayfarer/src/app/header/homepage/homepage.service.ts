import { Injectable } from '@angular/core';
import { cities } from 'src/app/data';

@Injectable({
  providedIn: 'root',
})
export class HomepageService {
  cityList = cities;
  constructor() {}

  findPosts(value: any) {
    this.cityList.map((city) => {
      city.posts.map((posts) => {
        if (posts.title.includes(value)) {
          console.log(posts);
        }
      });
    });
  }
}
