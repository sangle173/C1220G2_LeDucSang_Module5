import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {EducationDegree} from '../model/education-degree';

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
