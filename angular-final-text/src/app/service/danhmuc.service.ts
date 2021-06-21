import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Danhmuc} from '../model/danhmuc';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class DanhmucService {

  constructor(private http: HttpClient) {
  }

  getAllDanhMuc(): Observable<Danhmuc[]> {
    return this.http.get<Danhmuc[]>(API_URL + '/danhmuc');
  }
}
