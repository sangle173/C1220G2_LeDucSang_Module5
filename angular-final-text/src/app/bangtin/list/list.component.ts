import {Component, OnInit} from '@angular/core';
import {BangtinService} from '../../service/bangtin.service';
import {Bangtin} from '../../model/bangtin';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  bangtinDanhSach: Bangtin[];

  constructor(private bangtinService: BangtinService) {
  }

  ngOnInit(): void {
    this.getAllBangTin();
  }

  getAllBangTin() {
    return this.bangtinService.getAll().subscribe(result => {
      this.bangtinDanhSach = result;
    });
  }

  search(dientich: string, gia: string, huong: string) {
    if (dientich === '' && gia === '' && huong === '') {
      return this.getAllBangTin();
    } else {
      return this.bangtinService.searchBangTin(dientich, gia, huong).subscribe(result => {
        this.bangtinDanhSach = result;
      });
    }

  }
}
