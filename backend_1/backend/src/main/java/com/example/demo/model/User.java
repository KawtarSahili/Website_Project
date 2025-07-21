package com.example.demo.model;

import jakarta.persistence.*;
import lombok.*;

import java.sql.Timestamp;


@Entity
@Table(name = "users")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long user_id;

    private String username;
    private String email;
    private String password_hash;
    private String phone;

    @Enumerated(EnumType.STRING)
    @Builder.Default
    private Status status = Status.active;

    @Enumerated(EnumType.STRING)
    @Builder.Default
    private Role role = Role.customer;

    private Timestamp registration_date;
    private Timestamp last_login;

    public enum Status { active, inactive, suspended; }
    public enum Role { admin, customer, support; }

    // Getters and setters...
}




