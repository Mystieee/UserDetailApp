package com.rakbank.userApp.controller;

import com.rakbank.userApp.model.Person;
import com.rakbank.userApp.model.PersonDTO;
import com.rakbank.userApp.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class PersonController {
    @Autowired
    PersonRepository personRepository;

    @GetMapping("/persons")
    public List<Person> getAllPerson() {
        return personRepository.findAll();
    }

    @PostMapping("/addPerson")
    public ResponseEntity<Void> addPersonInfo(@RequestBody() PersonDTO personDTO) {

        Person person = new Person();

        if (personDTO.getId() == null) {
            Long id = personRepository.count() + 1;
            person.setId(id);
        }

        if (personDTO.getName() == null || personDTO.getName().isEmpty()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } else {
            person.setName(personDTO.getName());
        }

        if (personDTO.getEmail() == null || personDTO.getEmail().isEmpty()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } else {
            person.setEmail(personDTO.getEmail());
        }

        if (personDTO.getMobile_number() == null || personDTO.getMobile_number().isEmpty()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } else {
            person.setMobile_number(personDTO.getMobile_number());
        }

        if (personDTO.getAddress_line1() == null || personDTO.getAddress_line1().isEmpty()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } else {
            person.setAddress_line1(personDTO.getAddress_line1());
        }

        person.setAddress_line2(personDTO.getAddress_line2());


        person.setAddress_line3(personDTO.getAddress_line3());


        personRepository.save(person);

        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(personDTO.getId())
                .toUri();
        HttpHeaders responseHeaders = new HttpHeaders();
        responseHeaders.setLocation(uri);

        return new ResponseEntity(person, responseHeaders, HttpStatus.CREATED);
    }

    @PutMapping("/updatePerson/{id}")
    public ResponseEntity<Person> updatePerson(
            @PathVariable("id") Long id,
            @RequestBody() PersonDTO personDTO
    ) {
        if (id == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        Optional<Person> person = personRepository.findById(id);

        if (person.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        Person originalPerson = person.get();

        if (personDTO.getName() != null && !personDTO.getName().isEmpty()) {
            originalPerson.setName(personDTO.getName());
        }
        if (personDTO.getEmail() != null && !personDTO.getEmail().isEmpty()) {
            originalPerson.setEmail(personDTO.getEmail());
        }
        if (personDTO.getMobile_number() != null && !personDTO.getMobile_number().isEmpty()) {
            originalPerson.setMobile_number(personDTO.getMobile_number());
        }
        if (personDTO.getAddress_line1() != null && !personDTO.getAddress_line1().isEmpty()) {
            originalPerson.setAddress_line1(personDTO.getAddress_line1());
        }
        if (personDTO.getAddress_line2() != null && !personDTO.getAddress_line2().isEmpty()) {
            originalPerson.setAddress_line2(personDTO.getAddress_line2());
        }
        if (personDTO.getAddress_line3() != null && !personDTO.getAddress_line3().isEmpty()) {
            originalPerson.setAddress_line3(personDTO.getAddress_line3());
        }

        personRepository.save(originalPerson);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }












}
