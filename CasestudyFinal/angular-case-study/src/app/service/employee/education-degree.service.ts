import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Position} from '../../model/employee/position';
import {EducationDegree} from '../../model/employee/education-degree';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class EducationDegreeService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<EducationDegree[]> {
    return this.http.get<EducationDegree[]>(API_URL + '/education-degrees');
  }
}
