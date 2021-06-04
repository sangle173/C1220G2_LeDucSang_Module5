import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-picker-final',
  templateUrl: './color-picker-final.component.html',
  styleUrls: ['./color-picker-final.component.css']
})
export class ColorPickerFinalComponent implements OnInit {

  color = '#eeeeee';


  constructor() {
  }

  ngOnInit(): void {
  }

  changeBackground(): string {
    return this.color;
  }

}
