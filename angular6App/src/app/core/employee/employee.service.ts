import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlSettingService } from '../setting/url-setting.service';
import { EmployeeInterface } from '../../interface/employee-interface';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient, private urlSetting: UrlSettingService) { }

  registerNewEmployee(employee: EmployeeInterface) {
    const headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(this.urlSetting.employeeUrl.regsiter, employee, {headers});
  }

  getAllEmployee() {
    return this.http.get(this.urlSetting.employeeUrl.getAll);
  }

  deleteEmployee(employee: EmployeeInterface) {
    const headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.delete(this.urlSetting.employeeUrl.deleteEmp + '/' + employee.id);
  }

}
