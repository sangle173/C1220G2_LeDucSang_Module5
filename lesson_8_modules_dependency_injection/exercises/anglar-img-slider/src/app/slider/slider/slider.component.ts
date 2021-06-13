import {Component, Input, OnInit, SecurityContext} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Img} from '../../img';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit {
  current = 0;
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
      url: '../assets/img/9.jpg'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  getPrevious() {
    if (this.current === 0) {
      this.current = this.imgs.length;
    } else {
      this.current -= 1;
    }
  }

  getNext() {
    if (this.current === this.imgs.length) {
      this.current = 0;
    } else {
      this.current += 1;
    }
  }
}
