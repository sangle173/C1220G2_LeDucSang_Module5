import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Position} from '../../model/employee/position';
import {environment} from '../../../environments/environment';
import {Department} from '../../model/employee/department';

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
