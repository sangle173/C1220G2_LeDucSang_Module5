import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../model/product';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Bangtin} from '../model/bangtin';
import {Danhmuc} from '../model/danhmuc';
import {Vungmien} from '../model/vungmien';
import {Huong} from '../model/huong';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class BangtinService {

  constructor(private http: HttpClient) {
  }

  searchBangTin(dientich: string, gia: string, huong: string) {
    return this.http.get<Bangtin[]>(API_URL + '/bangtin?dientich_like=' + dientich + '&gia_like=' + gia + '&huong_like=' + huong);
  }

  getAll(): Observable<Bangtin[]> {
    return this.http.get<Bangtin[]>(API_URL + '/bangtin');
  }

  luuBangTin(bangtin): Observable<Bangtin> {
    return this.http.post<Bangtin>(API_URL + '/bangtin', bangtin);
  }

  findById(id: number): Observable<Bangtin> {
    return this.http.get<Bangtin>(`${API_URL}/bangtin/${id}`);
  }

  getAllDanhMuc(): Observable<Danhmuc[]> {
    return this.http.get<Danhmuc[]>(API_URL + '/danhmuc');
  }

  getAllVungMien(): Observable<Vungmien[]> {
    return this.http.get<Vungmien[]>(API_URL + '/vungmien');
  }

  getAllHuong(): Observable<Huong[]> {
    return this.http.get<Huong[]>(API_URL + '/huong');
  }
}
