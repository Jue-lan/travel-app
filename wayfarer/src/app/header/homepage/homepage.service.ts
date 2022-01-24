import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HomepageService {
  cityList: any;

  constructor(private http: HttpClient) {}

  findPosts(value: any) {
    return this.http.get('assets/data.json');
  }
}
