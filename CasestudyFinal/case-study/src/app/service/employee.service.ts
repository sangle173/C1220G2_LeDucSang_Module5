import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Employee} from '../model/employee';
const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(API_URL + '/employees');
  }

  saveEmployee(employee): Observable<Employee> {
    return this.http.post<Employee>(API_URL + '/employees', employee);
  }

  findById(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${API_URL}/employees/${id}`);
  }

  updateEmployee(id: number, employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${API_URL}/employees/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<Employee> {
    return this.http.delete<Employee>(`${API_URL}/employees/${id}`);
  }
}
