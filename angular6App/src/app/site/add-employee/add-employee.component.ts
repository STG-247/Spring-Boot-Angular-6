import { EmployeeService } from './../../core/employee/employee.service';
import { BsModalRef } from 'ngx-bootstrap';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { EmployeeInterface } from '../../interface/employee-interface';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  public closed: EventEmitter<EmployeeInterface> = new EventEmitter<EmployeeInterface>();
  public employee: EmployeeInterface = {};
  constructor(private modalRef: BsModalRef, private empSrv: EmployeeService) { }

  ngOnInit() {
  }

  addEmployee() {
    this.empSrv.registerNewEmployee(this.employee).subscribe(res => {
      if (res === true) {
        this.closed.emit(this.employee);
      } else {
        this.closed.emit(null);
      }
    });
    this.modalRef.hide();
  }
  cancel() {
    this.modalRef.hide();
    this.closed.emit(null);
  }

}
