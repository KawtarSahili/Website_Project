package com.telecom.auth.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class LoginRequest {
    private String phoneOrEmail;
    private String password;
    
    public String getPhoneOrEmail() { return phoneOrEmail; }
    public String getPassword() { return password; }
    
    public void setPhoneOrEmail(String phoneOrEmail) { this.phoneOrEmail = phoneOrEmail; }
    public void setPassword(String password) { this.password = password; }
}