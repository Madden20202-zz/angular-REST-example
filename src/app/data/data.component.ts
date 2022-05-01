import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  constructor() { }

  //@Input seems to need a type but was 
  // not seen in tutorial or code
  @Input() country: any;

  ngOnInit(): void {
  }

}
