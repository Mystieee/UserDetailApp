package com.rakbank.userApp.controller;

import com.rakbank.userApp.model.Person;
import com.rakbank.userApp.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class PersonController {
    @Autowired
    PersonRepository repository;

    @GetMapping("/persons")
    public List<Person> getAllPerson() {
        return repository.findAll();
    }
}
