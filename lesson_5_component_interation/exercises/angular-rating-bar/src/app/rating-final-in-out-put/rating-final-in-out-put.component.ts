import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-rating-final-in-out-put',
  templateUrl: './rating-final-in-out-put.component.html',
  styleUrls: ['./rating-final-in-out-put.component.css']
})
export class RatingFinalInOutPutComponent implements OnInit {

  starClassName = 'star-rating-blank';
  @Input() starId;
  @Input() rating;

  @Output() leave: EventEmitter<number> = new EventEmitter();
  @Output() enter: EventEmitter<number> = new EventEmitter();
  @Output() bigClick: EventEmitter<number> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    console.log(this.starId);
    console.log(this.rating);

    if (this.rating >= this.starId) {
      this.starClassName = 'star-rating-filled';
    }
  }

  onEnter() {
    this.enter.emit(this.starId);
  }

  onLeave() {
    this.leave.emit(this.starId);
  }

  starClicked() {
    this.bigClick.emit(this.starId);
  }

}
