package com.telecom.auth.model;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "verification_codes")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class VerificationCode {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    
    @Column(name = "phone_number", nullable = false)
    private String phoneNumber;

    
    @Column(name = "code", length = 10, nullable = false)
    private String code;
    
    @Enumerated(EnumType.STRING)
    @Column(name = "type", nullable = false)
    private VerificationType type;
    
    @Column(name = "expires_at", nullable = false)
    private LocalDateTime expiresAt;
    
    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt;
    
    public enum VerificationType {
        PHONE, EMAIL
    }
}