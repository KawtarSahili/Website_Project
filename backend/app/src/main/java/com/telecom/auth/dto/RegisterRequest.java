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
    private String verificationCode;

    
    // Getters
    public String getFullName() { return fullName; }
    public String getEmail() { return email; }
    public String getPhoneNumber() { return phoneNumber; }
    public String getPassword() { return password; }
    public String getConfirmPassword() { return confirmPassword; }
    public String getSimNumber() { return simNumber; }
    public String getVerificationCode() { return verificationCode; }
    
    // Setters
    public void setFullName(String fullName) { this.fullName = fullName; }
    public void setEmail(String email) { this.email = email; }
    public void setPhoneNumber(String phoneNumber) { this.phoneNumber = phoneNumber; }
    public void setPassword(String password) { this.password = password; }
    public void setConfirmPassword(String confirmPassword) { this.confirmPassword = confirmPassword; }
    public void setSimNumber(String simNumber) { this.simNumber = simNumber;}
    public void setVerificationCode(String verificationCode) { this.verificationCode = verificationCode; }

}

