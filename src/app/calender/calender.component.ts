import { CalenderContentComponent } from './../calender-content/calender-content.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent implements OnInit {
  @ViewChild(CalenderContentComponent) content:CalenderContentComponent;

  week=['日','一','二','三','四','五','六']
  results:any[];
  currentDate;
  ;
  constructor() { 
    
  }

  ngOnInit() {
    let date: Date
    let year;
    let month;
    let day;
    date = new Date();
    year = date.getFullYear();
    month = date.getMonth() + 1;

    const _year = new Date().getFullYear();
    const _month = new Date().getMonth() + 1;
    const _day = new Date().getDate()

    this.currentDate = `${year}-${month}`

    const weekLength = 7;
    let monthSize = this.getMonthSize(`${year}/${month}/1`);
    let prevMonthSize: number;
    if (month == 1) {
        prevMonthSize = this.getMonthSize(`${year-1}/12/1`);
    } else {
        prevMonthSize = this.getMonthSize(`${year}/${month - 1}/1`);
    }
    
    const firstDay=this.getFirstDay(year,month-1);
    let lines: number = Math.ceil((firstDay + monthSize) / weekLength);
    let initPrevDay = prevMonthSize - firstDay;
    let _m = new Array(lines * weekLength);
    this.results = new Array(lines);
    for (let i = 0; i < _m.length; i++) {
      let weekIndex = (i / weekLength).toFixed(0);
      if (i < firstDay) {
        _m[i] = {
          weekIndex,
          isCurrentMonth: false,
          date: ++initPrevDay,
          isCurrentDay: false
        }
      } else if (i >= monthSize + firstDay) {
        _m[i] = {
          weekIndex,
          isCurrentMonth: false,
          date: i - monthSize - firstDay + 1,
          isCurrentDay: false
        }
      } else {
        if (i - firstDay + 1 === _day && +year === _year && +month === _month) {
          _m[i] = {
            weekIndex,
            date: i - firstDay + 1,
            isCurrentMonth: true,
            isCurrentDay: true
          }
        } else {
          _m[i] = {
            weekIndex,
            isCurrentMonth: true,
            date: i - firstDay + 1,
            isCurrentDay: false
          }
        }
      }
    }  

    for (let i = 0; i < lines; i++) {
      this.results[i] = []
      for (let k = 0; k < weekLength; k++) {
        let index = k + i * weekLength;
        this.results[i][k] = _m[index]
      }
    }
}

  getMonthSize(date ? : string): number {
        const dateTime: Date = date ? new Date(date) : new Date();
        const year: number = dateTime.getFullYear();
        const month: number = dateTime.getMonth() + 1;
        return new Date(year, month, 0).getDate()
  }

  getFirstDay(year: number, month: number): number {
        return new Date(year, month, 1).getDay()
  }
}
