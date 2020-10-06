package com.rakbank.userApp.model;

import javax.persistence.*;

@Entity
@Table(name = "office")
public class Office {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String building_name;

    private String city;
    private String landline_number;
    private String address_line1;
    private String address_line2;
    private Integer po_box_number;
}
