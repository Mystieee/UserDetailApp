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
    private String office_address_line1;
    private String office_address_line2;
    private String po_box_number;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getBuilding_name() {
        return building_name;
    }

    public void setBuilding_name(String building_name) {
        this.building_name = building_name;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getLandline_number() {
        return landline_number;
    }

    public void setLandline_number(String landline_number) {
        this.landline_number = landline_number;
    }

    public String getOffice_address_line1() {
        return office_address_line1;
    }

    public void setOffice_address_line1(String office_address_line1) {
        this.office_address_line1 = office_address_line1;
    }

    public String getOffice_address_line2() {
        return office_address_line2;
    }

    public void setOffice_address_line2(String office_address_line2) {
        this.office_address_line2 = office_address_line2;
    }

    public String getPo_box_number() {
        return po_box_number;
    }

    public void setPo_box_number(String po_box_number) {
        this.po_box_number = po_box_number;
    }
}
