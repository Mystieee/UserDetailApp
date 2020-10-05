package com.rakbank.demo.model;

import javax.persistence.*;

@Entity
@Table(name = "office")
public class Office {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String buildingName;

    private String city;
    private Integer landlineNumber;
    private String addressLine1;
    private String addressLine2;
    private Integer POBoxNumber;
}
