import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.css'],
})
export class InfoPageComponent implements OnInit {
  // @Input() posts: any;
  // @Input() message: any;
  title: string = '';
  content: string = '';

  constructor() {}

  ngOnInit(): void {
    this.title = history.state.name;
    console.log(this.title);
    this.content = history.state.content;
  }
}
