import { Component } from '@angular/core';
import { Platform } from '@angular/cdk/platform';
import * as moment from 'moment'

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent {

  // A partir do módulo nativo
  // startDate = new Date(2022, 7, 22);

  // minDate = new Date(2022, 7, 1);
  // maxDate = new Date(2022, 7, 28);

  // A partir do moment
  startDate = moment([2022, 7, 22]);

  minDate = moment([2022, 7, 1]);
  maxDate = moment([2022, 7, 28]);

  constructor(private platform: Platform){}

  get isPlatform(){
    return this.platform.ANDROID || this.platform.IOS;
  }
}
