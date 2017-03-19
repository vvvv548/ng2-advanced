import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-calender-content',
  templateUrl: './calender-content.component.html',
  styleUrls: ['./calender-content.component.css']
})
export class CalenderContentComponent implements OnInit {
  @Input() currentMonth:string;
  @Input() currentDate:string;

  constructor() { }

  ngOnInit() {
  }

}
