import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  package: any;

  constructor(private http: HttpClient) { }

  getEmployee(): Observable<any> {
    const url = "http://localhost:3000/employees";
    return this.http.get(url).pipe(
      map(res => {
        return res
      })
    )
  }



  deleteEmployee(id: number): Observable<any> {
    const url = "http://localhost:3000/employees" + id;
    return this.http.delete(url).pipe(
      map(res => {
        return res
      })
    )
  }

  registerEmployee(employeedata: any): Observable<any> {
    const url = "http://localhost:3000/employees/";
    return this.http.post(url, employeedata).pipe(
      map(res => {
        return res
      })
    )
  }

  signUp(signupData: any): Observable<any> {
    const url = "http://localhost:3000/newsignup";
    return this.http.post(url, signupData).pipe(
      map(res => {
        return res
      })
    )
  }

  // updateRecords(data): Observable<any> {
  //   const url = "http://localhost:3000/employees/" + data.id;
  //   return this.http.put(url, data).pipe(
  //     map(res => {
  //       return res
  //     })
  //   )
  // }

  getAdminProject(): Observable<any> {
    const url = "http://localhost:3000/adminprojects";
    return this.http.get(url).pipe(
      map(res => {
        return res
      })
    )
  }
}
