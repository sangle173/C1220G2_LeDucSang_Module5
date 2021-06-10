import {Component, OnInit} from '@angular/core';
import {DictionarysService} from '../service/dictionarys.service';
import {Dictionary} from '../model/dictionary';

@Component({
  selector: 'app-dictionary-search',
  templateUrl: './dictionary-search.component.html',
  styleUrls: ['./dictionary-search.component.css']
})
export class DictionarySearchComponent implements OnInit {
  inputWord: string;
  vietnameseMean: string;
  words: Dictionary[];
  details: string;

  constructor(private dictionaryService: DictionarysService) {
  }

  ngOnInit(): void {
    this.getAllWord();
  }

  getWordVietnameseMean(word: string) {
    this.vietnameseMean = this.dictionaryService.getWord(word);
  }

  getAllWord() {
    this.words = this.dictionaryService.getAll();
    return this.words;
  }

  getDetailsByEnglishMean(word: string) {
    this.details = this.dictionaryService.getDetailsByEnglishMean(word);
    return this.details;
  }

}
