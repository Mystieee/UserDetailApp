package com.rakbank.userApp.repository;

import com.rakbank.userApp.model.Person;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonRepository extends JpaRepository<Person, Long> {
}
