package com.telecom.auth.repository;

import com.telecom.auth.model.VerificationCode;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface VerificationCodeRepository extends JpaRepository<VerificationCode, Integer> {
    Optional<VerificationCode> findTopByPhoneNumberAndCodeOrderByCreatedAtDesc(String phoneNumber, String code);
    void deleteByPhoneNumber(String phoneNumber);    
}
