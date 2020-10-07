package com.rakbank.userApp.controller;

import com.rakbank.userApp.model.Office;
import com.rakbank.userApp.model.OfficeDTO;
import com.rakbank.userApp.repository.OfficeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class OfficeController {
    @Autowired
    OfficeRepository officeRepository;

    @GetMapping("/offices")
    public List<Office> getAllOffices() {
        return officeRepository.findAll();
    }

    @PostMapping("/addOffice")
    public ResponseEntity<Void> addOfficeInfo(@RequestBody() OfficeDTO officeDTO) {

        Office office = new Office();

        if (officeDTO.getId() == null) {
            Long id = officeRepository.count() + 1;
            office.setId(id);
        }

        if (officeDTO.getBuilding_name() == null || officeDTO.getBuilding_name().isEmpty()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } else {
            office.setBuilding_name(officeDTO.getBuilding_name());
        }

        if (officeDTO.getCity() == null || officeDTO.getCity().isEmpty()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } else {
            office.setCity(officeDTO.getCity());
        }

        if (officeDTO.getLandline_number() == null || officeDTO.getLandline_number().isEmpty()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } else {
            office.setLandline_number(officeDTO.getLandline_number());
        }

        if (officeDTO.getOffice_address_line1() == null || officeDTO.getOffice_address_line1().isEmpty()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } else {
            office.setOffice_address_line1(officeDTO.getOffice_address_line1());
        }

        if (officeDTO.getOffice_address_line2() == null || officeDTO.getOffice_address_line2().isEmpty()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } else {
            office.setOffice_address_line2(officeDTO.getOffice_address_line2());
        }

        if (officeDTO.getPo_box_number() == null || officeDTO.getPo_box_number().isEmpty()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } else {
            office.setPo_box_number(officeDTO.getPo_box_number());
        }

        officeRepository.save(office);

        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(officeDTO.getId())
                .toUri();
        HttpHeaders responseHeaders = new HttpHeaders();
        responseHeaders.setLocation(uri);

        return new ResponseEntity(office, responseHeaders, HttpStatus.CREATED);
    }
}
