import {Injectable} from '@angular/core';
import {Dictionary} from '../model/dictionary';


@Injectable({
  providedIn: 'root'
})
export class DictionarysService {
  words: Dictionary[] = [
    {
      englishMean: 'Hello',
      vietnameseMean: 'Xin chao',
      details: 'Verd'
    },
    {
      englishMean: 'Book',
      vietnameseMean: 'Sach',
      details: 'N'
    },
    {
      englishMean: 'Table',
      vietnameseMean: 'Cai Ban',
      details: 'N',
    },
    {
      englishMean: 'Fan',
      vietnameseMean: 'Cai quat',
      details: 'Verd'
    },
    {
      englishMean: 'Camara',
      vietnameseMean: 'May anh',
      details: 'N, ',
    },
    {
      englishMean: 'Run',
      vietnameseMean: 'Chay',
      details: 'Verd'
    },
    {
      englishMean: 'Debug',
      vietnameseMean: 'Sua loi',
      details: 'Verd'
    }
    ,
    {
      englishMean: 'Present',
      vietnameseMean: 'Hien Tai, Mon Qua',
      details: 'Tính từ\n' +
        '(vị ngữ) có mặt, hiện diện\n' +
        'everybody present welcomed the decision\n' +
        'mọi người có mặt đều hoan nghênh quyết định ấy\n' +
        'there were 200 people present at the meeting\n' +
        'đã có hai trăm người có mặt trong buổi họp\n' +
        'analysis showed that cocaine was present in the mixture\n' +
        'phân tích đã cho thấy có cocain trong hỗn hợp\n' +
        '(thuộc ngữ) hiện nay, hiện tại, nay, này\n' +
        'the present world situation\n' +
        'tình trạng thế giới hiện nay\n' +
        'in the present case\n' +
        'trong trường hợp này\n' +
        '(thuộc ngữ) đang xem xét, đang bàn'
    }
  ];

  constructor() {
  }

  getWord(word: string): string {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.words.length; i++) {
      if (word === this.words[i].englishMean) {
        return this.words[i].vietnameseMean;
      }
    }
  }

  getAll() {
    return this.words;
  }

  getDetailsByEnglishMean(word: string) {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.words.length; i++) {
      if (word === this.words[i].englishMean) {
        return this.words[i].details;
      }
    }
  }

  getDictionaryByEnglishWord(inputWord: Dictionary) {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.words.length; i++) {
      // @ts-ignore
      if (inputWord === this.words[i].englishMean) {
        return this.words[i];
      }
    }
  }
}
