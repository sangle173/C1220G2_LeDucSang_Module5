import {Component, OnInit} from '@angular/core';

const FILTER_PAG_REGEX = /[^0-9]/g;

@Component({
  selector: 'app-pageing',
  templateUrl: './pageing.component.html',
  styleUrls: ['./pageing.component.css']
})
export class PageingComponent {

  page = 4;

  selectPage(page: string) {
    this.page = parseInt(page, 10) || 1;
  }

  formatInput(input: HTMLInputElement) {
    input.value = input.value.replace(FILTER_PAG_REGEX, '');
  }

}
