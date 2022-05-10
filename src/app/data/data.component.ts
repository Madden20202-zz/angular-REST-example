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

  constructor() { }

  ngOnInit(): void {
  }

}
