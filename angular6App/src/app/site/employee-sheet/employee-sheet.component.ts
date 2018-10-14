import { EmployeeInterface } from './../../interface/employee-interface';
import { EmployeeService } from './../../core/employee/employee.service';
import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';

@Component({
  selector: 'app-employee-sheet',
  templateUrl: './employee-sheet.component.html',
  styleUrls: ['./employee-sheet.component.css']
})
export class EmployeeSheetComponent implements OnInit {
  public employees: Array<EmployeeInterface>;
  private modalRef: BsModalRef;
  constructor(private empSrv: EmployeeService, private modalService: BsModalService) { }

  ngOnInit() {
    this.getAllEmployees();
  }

  getAllEmployees() {
    this.empSrv.getAllEmployee().subscribe(res => {
      this.employees = <Array<EmployeeInterface>>res;
    });
  }

  addEmployee() {
    const config = { animated: true, keyboard: true, backdrop: true, ignoreBackdropClick: true, class: 'modal-lg'};
    this.modalRef = this.modalService.show(AddEmployeeComponent, config);
    this.modalRef.content.closed.subscribe(
      employee => {
        if (employee !== null && employee !== undefined) {
          this.employees.push(employee);
          this.getAllEmployees();
        }
      }, err => {
        if (err) {
          console.error(err.message);
        }
      });
  }

  deleteEmployee( employee: EmployeeInterface) {
    this.empSrv.deleteEmployee(employee).subscribe(res => {
      if (res === true) {
        this.employees.forEach((emp, indx) => {
          if (emp.id === employee.id) {
            this.employees.splice(indx, 1);
          }
        });
      }
    });
  }

}
