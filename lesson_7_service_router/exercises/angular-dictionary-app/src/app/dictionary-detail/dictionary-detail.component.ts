import {Component, Input, OnInit} from '@angular/core';
import {DictionarysService} from '../service/dictionarys.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Dictionary} from '../model/dictionary';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  dictionary: Dictionary;

  constructor(private dictionaryService: DictionarysService,
              private activatedRoute: ActivatedRoute
  ) {
    const inputString = this.activatedRoute.snapshot.params.englishMean;
    this.dictionary = this.getDictionary(inputString);
  }

  ngOnInit(): void {
  }

  // @ts-ignore
  private getDictionary(inputWord: string): Dictionary {
    this.dictionaryService.getDetailsByEnglishMean(inputWord);
  }
}
