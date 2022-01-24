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

  postList: any = [];
  searchSubject = new Subject();
  toggleSearchField: boolean = true;
  toggleImageField: boolean = false;
  constructor(private searchService: HomepageService) {}

  ngOnInit(): void {
    this.searchSubject
      .pipe(debounceTime(1000), distinctUntilChanged())
      .subscribe((postTitle) => {
        this.searchService.findPosts(postTitle).subscribe((response) => {
          this.cityList = response;

          return this.cityList.cities.map((city: any) => {
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

  displaySearch() {
    this.toggleSearchField = !this.toggleSearchField;
  }
  displayImage() {
    this.toggleImageField = !this.toggleImageField;
  }
}
