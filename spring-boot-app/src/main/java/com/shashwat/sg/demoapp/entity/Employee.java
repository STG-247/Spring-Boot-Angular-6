package com.shashwat.sg.demoapp.entity;

import com.shashwat.sg.demoapp.enums.GenderEnumeration;

import javax.persistence.*;

@Entity(name = "employee")
@Table(name = "EMPLOYEE")
@EntityListeners(Employee.class)
@Inheritance(strategy = InheritanceType.JOINED)
public class Employee extends AbstractEntity {

    private String firstName;
    private String lastName;
    private GenderEnumeration gender;
    private String dateOfBirth;
    private String department;

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public GenderEnumeration getGender() {
        return gender;
    }

    public void setGender(GenderEnumeration gender) {
        this.gender = gender;
    }

    public String getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(String dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }
}
