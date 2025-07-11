package com.example.demo.dto;

public class RegisterRequest {
    private String fullName;
    private String email;
    private String phoneNumber;
    private String simNumber;
    private String password;

    public String getFullName() { return fullName; }
    public void setFullName(String fullName) { this.fullName = fullName; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getPhoneNumber() { return phoneNumber; }
    public void setPhoneNumber(String phoneNumber) { this.phoneNumber = phoneNumber; }

    public String getSimNumber() { return simNumber; }
    public void setSimNumber(String simNumber) { this.simNumber = simNumber; }

    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
}

