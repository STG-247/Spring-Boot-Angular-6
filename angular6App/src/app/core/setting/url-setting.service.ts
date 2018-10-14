import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlSettingService {
  public employeeUrl: UrlEmployeeSettings = undefined;
  constructor() {
    this.employeeUrl = new UrlEmployeeSettings();
  }
}

export class UrlEmployeeSettings {
  public regsiter: string = undefined;
  public getAll: string = undefined;
  public deleteEmp: string = undefined;
  constructor() {
    this.regsiter = '/api/emp/save';
    this.getAll = '/api/emp/allEmp';
    this.deleteEmp = '/api/emp/delete';
  }
}
