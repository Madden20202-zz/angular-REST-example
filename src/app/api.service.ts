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
    // Make sure to check API website to 
    // double check links to ensure the 
    // proper info is used
    return this.http.get('https://restcountries.com/v3.1/all');
  }
}
