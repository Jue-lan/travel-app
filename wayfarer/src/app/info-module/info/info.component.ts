import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
})
export class InfoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  findSomePost(value: Array<string>): Array<string> {
    return Array<string>();
  }
}
