package com.rakbank.userApp.model;

public class OfficeDTO {
    private Long id;
    private String building_name;
    private String city;
    private String landline_number;
    private String address_line1;
    private String address_line2;
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

    public String getAddress_line1() {
        return address_line1;
    }

    public void setAddress_line1(String address_line1) {
        this.address_line1 = address_line1;
    }

    public String getAddress_line2() {
        return address_line2;
    }

    public void setAddress_line2(String address_line2) {
        this.address_line2 = address_line2;
    }

    public String getPo_box_number() {
        return po_box_number;
    }

    public void setPo_box_number(String po_box_number) {
        this.po_box_number = po_box_number;
    }
}
