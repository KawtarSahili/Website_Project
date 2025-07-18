package com.telecom.auth.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
// RegisterRequest.java
public class RegisterRequest {
    private String fullName;
    private String email;
    private String phoneNumber;
    private String password;
    private String confirmPassword;
    private String simNumber;
    
    // Getters
    public String getFullName() { return fullName; }
    public String getEmail() { return email; }
    public String getPhoneNumber() { return phoneNumber; }
    public String getPassword() { return password; }
    public String getConfirmPassword() { return confirmPassword; }
    public String getSimNumber() { return simNumber; }
    
    // Setters
    public void setFullName(String fullName) { this.fullName = fullName; }
    // ... other setters
}

