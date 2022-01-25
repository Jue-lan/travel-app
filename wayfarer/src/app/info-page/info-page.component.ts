import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.css'],
})
export class InfoPageComponent implements OnInit {
  title: string = '';
  content: string = '';
  author: string = '';

  constructor() {}

  ngOnInit(): void {
    this.title = history.state.title;
    console.log(this.title);
    this.content = history.state.content;
    this.author = history.state.author;
  }
}
