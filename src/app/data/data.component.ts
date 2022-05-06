import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  //@Input needs an explicit type but was 
  // not seen in tutorial 
  @Input() country: any;

  constructor() { 
    // Still no value, could the link be bad?
    this.printCountryValue();
  }

  printCountryValue() {
    console.log(this.country);
  }

  ngOnInit(): void {
  }

}
