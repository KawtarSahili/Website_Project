package com.telecom.auth.service;

import com.telecom.auth.model.*;
import com.telecom.auth.repository.SimCardRepository;
import com.telecom.auth.repository.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class SimService {
    private final SimCardRepository simCardRepository;
    private final UserRepository userRepository;

    @Transactional
    public SimCard createAndAssignSimCard(String simNumber, Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        SimCard simCard = SimCard.builder()
                .simNumber(simNumber)
                .isActive(true)
                .createdAt(LocalDateTime.now())
                .user(user)
                .build();

        return simCardRepository.save(simCard);
    }

    @Transactional
public SimCard assignSimCardToUser(String simNumber, Long userId) {
    User user = userRepository.findById(userId)
        .orElseThrow(() -> new EntityNotFoundException("User not found"));

    SimCard simCard = simCardRepository.findBySimNumber(simNumber)
        .orElse(null);

    if (simCard == null) {
        // sim n'existe pas, on la crée et on l'assigne
        simCard = SimCard.builder()
            .simNumber(simNumber)
            .isActive(true)
            .createdAt(LocalDateTime.now())
            .user(user) // affectation directe
            .build();
    } else {
        if (simCard.getUser() != null) {
            throw new IllegalStateException("SIM card already assigned to another user");
        }
        simCard.setUser(user);
    }

    return simCardRepository.save(simCard);
}


    private SimCard createNewSimCard(String simNumber) {
        return SimCard.builder()
            .simNumber(simNumber)
            .isActive(true)
            .createdAt(LocalDateTime.now())
            .build();
    }

    public void verifySimCard(String simNumber) {
        // Implementation with external system
    }

    public void sendVerificationCode(String phoneNumber) {
        // SMS integration
    }
}