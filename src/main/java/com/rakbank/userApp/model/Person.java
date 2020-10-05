package com.rakbank.userApp.model;

import javax.persistence.*;

@Entity
@Table(name = "person")
public class Person {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private Integer mobileNumber;

    @Column(nullable = false)
    private String addressLine1;

    private String addressLine2;

    private String addressLine3;
}
