import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { HomepageService } from './homepage.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  postTitle: string = '';
  cityList: any;

  weatherData: any;
  cityTitle: string = '';
  postList: any = [];
  searchSubject = new Subject();
  toggleSearchField: boolean = true;
  toggleImageField: boolean = false;
  toggleWeather: boolean = true;
  constructor(
    private searchService: HomepageService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.searchSubject
      .pipe(debounceTime(1000), distinctUntilChanged())
      .subscribe((postTitle) => {
        this.searchService.findPosts(postTitle).subscribe((response) => {
          this.cityList = response;

          return this.cityList.cities.map((city: any) => {
            // console.log(city);
            this.cityTitle = city.name;
            city.posts.map((posts: any) => {
              console.log(posts);
              // posts.reverse();
              if (posts.title.includes(postTitle)) {
                console.log(posts);
                this.postList.push(posts);

                this.postList.reverse();
                console.log(this.postList);
              }
            });
          });
        });
      });
  }

  findPostsByTitle(value: string) {
    if (value.length > 0) {
      this.searchSubject.next(value);
    }
  }

  findWeather() {
    this.http.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.cityTitle},us&appid=052f26926ae9784c2d677ca7bc5dec98&&units=metric`
    );
  }

  displaySearch() {
    this.toggleSearchField = !this.toggleSearchField;
  }
  displayImage() {
    this.toggleImageField = !this.toggleImageField;
  }
}
