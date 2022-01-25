import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-info-window',
  templateUrl: './info-window.component.html',
  styleUrls: ['./info-window.component.css'],
})
export class InfoWindowComponent implements OnInit {
  cityData: any;

  cityObject: any;
  parentMessage = 'Hello from parent';
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      console.log(params.get('id'));
      this.findCity(params.get('id'));
    });
  }

  findCity(cityId: any) {
    this.http.get('assets/data.json').subscribe((data) => {
      this.cityData = data;
      this.cityObject = this.cityData.cities[cityId];
      console.log(this.cityObject);
    });
  }

  goToShowPage() {
    this.router.navigate([
      '/posts',
      { name: this.cityObject.name, content: this.cityObject.content },
    ]);
  }
}
