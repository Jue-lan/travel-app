import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css'],
})
export class CitiesComponent implements OnInit {
  cityData: any;

  @Input('cityNumber') cityNumber: any;
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http.get('assets/data.json').subscribe((data) => {
      this.cityData = data;
    });
  }
}
