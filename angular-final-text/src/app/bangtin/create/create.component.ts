import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BangtinService} from '../../service/bangtin.service';
import {Router} from '@angular/router';
import {Danhmuc} from '../../model/danhmuc';
import {Huong} from '../../model/huong';
import {Vungmien} from '../../model/vungmien';
import {Observable} from 'rxjs';
import {DanhmucService} from '../../service/danhmuc.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({
    danhmuc: new FormControl(''),
    vungmien: new FormControl(''),
    toChuc: new FormControl(''),
    loaiTin: new FormControl(''),
    tinhTrang: new FormControl(''),
    diachi: new FormControl('', [Validators.required]),
    dientich: new FormControl('', [Validators.required, Validators.min(20), Validators.pattern('^[0-9.]+$')]),
    huong: new FormControl(''),
    tuaDe: new FormControl('', [Validators.required]),
    noiDung: new FormControl(''),
    gia: new FormControl('', [Validators.required, Validators.min(100000000), Validators.pattern('^[0-9]+$')]),
    ngayDang: new FormControl('', [Validators.required]),
    trangthai: new FormControl('', [Validators.required]),
  });
  private router: Router;
  danhmucs: Danhmuc[];
  huongs: Huong[];
  vungmiens: Vungmien[];

  constructor(private bangtinService: BangtinService,
  ) {
  }

  ngOnInit(): void {
    this.bangtinService.getAllDanhMuc().subscribe(result => {
      this.danhmucs = result;
    });
    this.bangtinService.getAllHuong().subscribe(result => {
      this.huongs = result;
    });
    this.bangtinService.getAllVungMien().subscribe(result => {
      this.vungmiens = result;
    });
  }

  onSubmit() {
    const bangtin = this.registerForm.value;
    this.bangtinService.luuBangTin(bangtin).subscribe(() => {
      this.registerForm.reset();
      this.router.navigate(['/bangtin/danhsach']);
    }, e => {
      console.log(e);
    });
  }

  get danhmuc() {
    return this.registerForm.get('danhmuc');
  }

  get vungmien() {
    return this.registerForm.get('vungmien');
  }

  get toChuc() {
    return this.registerForm.get('toChuc');
  }

  get loaitin() {
    return this.registerForm.get('loaiTin');
  }

  get tinhTrang() {
    return this.registerForm.get('tinhTrang');
  }

  get diachi() {
    return this.registerForm.get('diachi');
  }

  get dientich() {
    return this.registerForm.get('dientich');
  }

  get tuaDe() {
    return this.registerForm.get('tuaDe');
  }

  get noiDung() {
    return this.registerForm.get('noiDung');
  }

  get gia() {
    return this.registerForm.get('gia');
  }

  get ngayDang() {
    return this.registerForm.get('ngayDang');
  }

  get trangthai() {
    return this.registerForm.get('trangthai');
  }

  reset() {
    this.registerForm.reset();
  }
}
