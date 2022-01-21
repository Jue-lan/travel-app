import { Component, OnInit } from '@angular/core';
import { cities } from 'src/app/data';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { HomepageService } from './homepage.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  cities = cities;
  postTitle: string = '';
  searchSubject = new Subject();
  constructor(private searchService: HomepageService) {}

  ngOnInit(): void {
    this.searchSubject
      .pipe(debounceTime(1000), distinctUntilChanged())
      .subscribe((postTitle) => {
        this.searchService.findPosts(postTitle);
      });
  }

  findPostsByTitle(value: string) {
    if (value.length > 0) {
      this.searchSubject.next(value);
    }
  }
}
