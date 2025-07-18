package com.telecom.auth.service;

import com.telecom.auth.model.*;
import com.telecom.auth.dto.LoginRequest;
import com.telecom.auth.dto.AuthResponse;
import com.telecom.auth.repository.UserRepository;
import com.telecom.auth.security.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.telecom.auth.dto.RegisterRequest;
import java.time.LocalDateTime;




@Service
@RequiredArgsConstructor
public class AuthService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    private final SimService simService;

    @Transactional
    public AuthResponse register(RegisterRequest request) {
        // Create user without SIM card first
        var user = User.builder()
            .fullName(request.getFullName())
            .email(request.getEmail())
            .phoneNumber(request.getPhoneNumber())
            .password(passwordEncoder.encode(request.getPassword()))
            .role(Role.USER)
            .isVerified(false)
            .createdAt(LocalDateTime.now())
            .build();

        user = userRepository.save(user);

        // Handle SIM card assignment if provided
        if (request.getSimNumber() != null && !request.getSimNumber().isEmpty()) {
            simService.assignSimCardToUser(request.getSimNumber(), user.getId());
        }

        var jwtToken = jwtService.generateToken(user);
        return AuthResponse.builder()
    .token(jwtToken)
    .userId(user.getId())
    .email(user.getEmail())
    .phoneNumber(user.getPhoneNumber())
    .fullName(user.getFullName())
    .role(user.getRole().name())
    .build();

    }

    public AuthResponse authenticate(LoginRequest request) {
        authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(
                request.getPhoneOrEmail(),
                request.getPassword()
            )
        );
        var user = userRepository.findByEmail(request.getPhoneOrEmail())
            .orElseThrow();
        var jwtToken = jwtService.generateToken(user);
        return AuthResponse.builder()
            .token(jwtToken)
            .userId(user.getId())
            .email(user.getEmail())
            .phoneNumber(user.getPhoneNumber())
            .fullName(user.getFullName())
            .role(user.getRole().name())
            .build();
    }
    
}