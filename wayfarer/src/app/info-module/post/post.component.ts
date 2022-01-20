import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  cities = [
    {
      name: 'New York',
      image: '',
      posts: [
        {
          title: '',
          content: '',
        },
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
