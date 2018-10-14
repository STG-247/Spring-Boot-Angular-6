package com.shashwat.sg.demoapp.entity;

import javax.persistence.*;
import java.io.Serializable;

@EntityListeners({Employee.class})
@MappedSuperclass
public class AbstractEntity implements EntityObject, Serializable {

    private static final long serialVersionUID = 1L;

    Long id;

    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    @Override
    public Long getId() {
        return this.id;
    }

    @Override
    public void setId(Long id) {
        this.id = id;
    }
}
