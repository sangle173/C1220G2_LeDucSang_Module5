import {Component, Input, OnInit, SecurityContext} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Img} from '../../img';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit {
  currentIndex = 0;
  imgs: Img[] = [
    {
      id: 1,
      url: '../assets/img/1.jpg'
    },
    {
      id: 2,
      url: '../assets/img/2.jpg'
    }
    , {
      id: 3,
      url: '../assets/img/3.jpg'
    },
    {
      id: 4,
      url: '../assets/img/4.jpg'
    }
    , {
      id: 5,
      url: '../assets/img/5.jpg'
    }
    , {
      id: 6,
      url: '../assets/img/6.jpg'
    },
    , {
      id: 7,
      url: '../assets/img/7.jpg'
    }
    ,
    {
      id: 8,
      url: '../assets/img/8.jpg'
    },
    {
      id: 9,
      url: '../assets/img/9.jpg'
    },
    {
      id: 10,
      url: '../assets/img/10.jpg'
    },
    {
      id: 11,
      url: '../assets/img/11.jpg'
    }
    ,
    {
      id: 12,
      url: '../assets/img/12.jpg'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  getPrevious() {
    if (this.currentIndex === 0) {
      this.currentIndex = (this.imgs.length - 1);
    } else {
      this.currentIndex -= 1;
    }
  }

  getNext() {
    if (this.currentIndex === (this.imgs.length - 1)) {
      this.currentIndex = 0;
    } else {
      this.currentIndex += 1;
    }
  }
}
