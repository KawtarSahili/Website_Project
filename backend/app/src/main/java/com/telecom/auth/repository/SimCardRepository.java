package com.telecom.auth.repository;

import com.telecom.auth.model.SimCard;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface SimCardRepository extends JpaRepository<SimCard, String> {
    Optional<SimCard> findBySimNumber(String simNumber);
    boolean existsBySimNumber(String simNumber);
}