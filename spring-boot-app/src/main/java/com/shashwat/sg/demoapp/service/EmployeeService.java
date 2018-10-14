package com.shashwat.sg.demoapp.service;

import com.shashwat.sg.demoapp.entity.Employee;
import com.shashwat.sg.demoapp.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class EmployeeService {

    private EmployeeRepository empRepo;
    @Autowired
    EmployeeService(EmployeeRepository empRepo){
        this.empRepo = empRepo;
    }

    public List<Employee> getAllEmployeeList(){
        return this.empRepo.findAll();
    }

    public boolean saveEmployee(Employee emp){
        return this.empRepo.save(emp) != null ? true : false;
    }

    public boolean deleteEmployee(Long id) {
        try {
            this.empRepo.deleteById(id);
            return true;
        }catch(Exception ex){
            return false;
        }
    }
}
