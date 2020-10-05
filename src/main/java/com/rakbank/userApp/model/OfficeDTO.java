package com.rakbank.userApp.model;

public class OfficeDTO {
    private Long id;
    private String buildingName;
    private String city;
    private Integer landlineNumber;
    private String addressLine1;
    private String addressLine2;
    private Integer POBoxNumber;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getBuildingName() {
        return buildingName;
    }

    public void setBuildingName(String buildingName) {
        this.buildingName = buildingName;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public Integer getLandlineNumber() {
        return landlineNumber;
    }

    public void setLandlineNumber(Integer landlineNumber) {
        this.landlineNumber = landlineNumber;
    }

    public String getAddressLine1() {
        return addressLine1;
    }

    public void setAddressLine1(String addressLine1) {
        this.addressLine1 = addressLine1;
    }

    public String getAddressLine2() {
        return addressLine2;
    }

    public void setAddressLine2(String addressLine2) {
        this.addressLine2 = addressLine2;
    }

    public Integer getPOBoxNumber() {
        return POBoxNumber;
    }

    public void setPOBoxNumber(Integer POBoxNumber) {
        this.POBoxNumber = POBoxNumber;
    }
}
