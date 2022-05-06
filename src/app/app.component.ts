import { Component, OnInit } from '@angular/core';
// Allows use of the API 
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-REST-example';
    // will allow the website to have the data locally
    countryData: any;

  constructor(private api:ApiService) {}

  ngOnInit(): void {
    this.api.getCountries().subscribe((data)=>{
      this.countryData = data;
    });
  }
}
