import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-my-countdown-timer',
  templateUrl: './my-countdown-timer.component.html',
  styleUrls: ['./my-countdown-timer.component.css']
})
export class MyCountdownTimerComponent implements OnInit {

  @Input()
  init: number = 0;
  public counter = 0;
  public endText = '';
  public startText = '';
  @Output()
  onFinish = new EventEmitter<any>();

  // tslint:disable-next-line:no-output-native
  @Output()
  start = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit(): void {
    this.startText = 'STARTED COUNTDOWN';
    this.startCountdown();
  }

  startCountdown() {
    if (this.init && this.init > 0) {
      this.counter = this.init;
      this.doCountdown();
    }
  }

  doCountdown() {
    setTimeout(() => {
      this.counter = this.counter - 1;
      this.processCountdown();
    }, 1000);
  }

  processCountdown() {
    console.log('count is ', this.counter);
    if (this.counter === 0) {
      this.endText = 'HAPPY NEW YEAR';
      this.startText = '';
      this.clearTimer();
    } else {
      this.doCountdown();
    }
  }

  clearTimer() {
    clearInterval(this.init);
  }
}

