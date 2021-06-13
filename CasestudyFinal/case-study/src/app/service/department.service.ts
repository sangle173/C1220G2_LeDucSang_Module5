import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Department} from '../model/department';
import {Observable} from 'rxjs';
const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Department[]> {
    return this.http.get<Department[]>(API_URL + '/departments');
  }
}
