package com.telecom.auth.model;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "sim_cards")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SimCard {
    @Id
    @Column(name = "sim_number", length = 50, nullable = false)
    private String simNumber;
    
    @Column(name = "is_active", nullable = false)
    @Builder.Default
    private boolean isActive = true;
    
    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;
}