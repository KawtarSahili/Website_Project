package com.telecom.auth.service;

import com.telecom.auth.model.User;
import com.telecom.auth.model.VerificationCode;
import com.telecom.auth.model.VerificationCode.VerificationType;
import com.telecom.auth.repository.VerificationCodeRepository;
import com.telecom.auth.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Random;

@Service
@RequiredArgsConstructor
public class VerificationCodeService {

    private final VerificationCodeRepository verificationCodeRepository;
    private final UserRepository userRepository;

    public void generateAndSendCode(String phoneNumber) {
        String generatedCode = String.format("%06d", new Random().nextInt(999999));
    
        VerificationCode code = VerificationCode.builder()
            .phoneNumber(phoneNumber)
            .code(generatedCode)
            .type(VerificationCode.VerificationType.PHONE)
            .createdAt(LocalDateTime.now())
            .expiresAt(LocalDateTime.now().plusMinutes(5))
            .build();
    
        verificationCodeRepository.save(code);
    
        // Pour le test : affichage console
        System.out.println("📩 Verification code for " + phoneNumber + ": " + generatedCode);
    }
    

    public boolean isValid(String phoneNumber, String inputCode) {
        return verificationCodeRepository
            .findTopByPhoneNumberAndCodeOrderByCreatedAtDesc(phoneNumber, inputCode)
            .filter(code -> code.getExpiresAt().isAfter(LocalDateTime.now()))
            .isPresent();
    }
    
    public void clear(String phoneNumber) {
        verificationCodeRepository.deleteByPhoneNumber(phoneNumber);
    }
    
}
