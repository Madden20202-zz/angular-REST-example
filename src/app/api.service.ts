import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// This file was created by using the command
// ng generate service api

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  // This http call is used to 
  // communicate with the internet 
  // this will allow it to gather data from 
  // another point. This other 
  // point is usually a server
  constructor(private http:HttpClient) { }

  getCountries() {
    console.log('getCountries was called');
    // return this.http.get('https://restcountries.eu/rest/v2/all');
    return this.http.get('https://restcountries.eu/rest/v2/all');
  }
}
