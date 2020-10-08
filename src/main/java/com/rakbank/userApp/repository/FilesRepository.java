package com.rakbank.userApp.repository;

import com.rakbank.userApp.model.Files;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FilesRepository extends JpaRepository<Files, Long> {
}
