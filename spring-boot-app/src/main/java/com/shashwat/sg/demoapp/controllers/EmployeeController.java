package com.shashwat.sg.demoapp.controllers;

import com.shashwat.sg.demoapp.entity.Employee;
import com.shashwat.sg.demoapp.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/emp/")
public class EmployeeController {

    private EmployeeService empSrv;
    @Autowired
    EmployeeController(EmployeeService empSrv){
        this.empSrv = empSrv;
    }

    @GetMapping("allEmp")
    public List<Employee> getAllEmployees(){
        return this.empSrv.getAllEmployeeList();
    }

    @PostMapping("save")
    public boolean saveNewEmployeeData(@RequestBody Employee employee){
        return this.empSrv.saveEmployee(employee);
    }

    @DeleteMapping("delete/{id}")
    public boolean deleteEmployee(@PathVariable("id") Long id){
        return this.empSrv.deleteEmployee(id);
    }

}
