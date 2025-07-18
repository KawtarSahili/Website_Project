package com.telecom.auth.controller;

import com.telecom.auth.dto.AuthResponse;
import com.telecom.auth.dto.LoginRequest;
import com.telecom.auth.dto.RegisterRequest;
import com.telecom.auth.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.telecom.auth.service.VerificationCodeService;


@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {
    private final AuthService authService;
    private final VerificationCodeService codeService;


    /**
     * Endpoint for user registration.
     * @param request the registration request containing user details.
     * @return a response entity containing the authentication response.
     */

     @PostMapping("/register")
     public ResponseEntity<AuthResponse> register(@RequestBody RegisterRequest request) {
         System.out.println(">> REGISTER endpoint called");
         return ResponseEntity.ok(authService.register(request));
     }
     

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody LoginRequest request) {
        return ResponseEntity.ok(authService.authenticate(request));
    }

    @PostMapping("/send-verification")
    public ResponseEntity<String> sendVerification(@RequestParam String phoneNumber) {
        codeService.generateAndSendCode(phoneNumber);
        return ResponseEntity.ok("Verification code sent to " + phoneNumber);
    }
    
    @GetMapping("/verify-code")
    public ResponseEntity<String> verifyCode(
        @RequestParam String phone,
        @RequestParam String code
    ) {
    boolean isValid = codeService.isValid(phone, code);
    if (isValid) {
        codeService.clear(phone); // Supprimer les anciens codes utilisés
        return ResponseEntity.ok("✅ Code vérifié avec succès !");
    } else {
        return ResponseEntity.status(400).body("❌ Code invalide ou expiré.");
    }
    }


}