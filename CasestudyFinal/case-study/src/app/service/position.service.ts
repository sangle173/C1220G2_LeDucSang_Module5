import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Position[]> {
    return this.http.get<Position[]>(API_URL + '/positions');
  }
}
