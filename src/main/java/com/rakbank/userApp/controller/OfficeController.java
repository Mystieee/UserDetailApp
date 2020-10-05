package com.rakbank.userApp.controller;

import com.rakbank.userApp.model.Office;
import com.rakbank.userApp.repository.OfficeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class OfficeController {
    @Autowired
    OfficeRepository repository;

    @GetMapping("/offices")
    public List<Office> getAllOffices() {
        return repository.findAll();
    }
}
