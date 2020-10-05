package com.rakbank.userApp.repository;

import com.rakbank.userApp.model.Office;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OfficeRepository extends JpaRepository<Office, Long> {
}
