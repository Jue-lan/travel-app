import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.css'],
})
export class InfoPageComponent implements OnInit {
  @Input() posts: any;
  @Input() message: any;

  constructor() {}

  ngOnInit(): void {}
}
