package com.telecom.auth.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AuthResponse {
    private String token;
    private Long userId;
    private String email;
    private String phoneNumber;
    private String fullName;
    private String role;
    
    // Getters and builder
    public static AuthResponseBuilder builder() {
        return new AuthResponseBuilder();
    }
    
    public static class AuthResponseBuilder {
        private AuthResponse response = new AuthResponse();
        
        public AuthResponseBuilder token(String token) { response.token = token; return this; }
        public AuthResponseBuilder userId(Long userId) { response.userId = userId; return this; }
        public AuthResponseBuilder email(String email) { response.email = email; return this; }
        public AuthResponseBuilder phoneNumber(String phoneNumber) { response.phoneNumber = phoneNumber; return this; }
        public AuthResponseBuilder fullName(String fullName) { response.fullName = fullName; return this; }
        public AuthResponseBuilder role(String role) { response.role = role; return this; }
        public AuthResponse build() { return response; }
    }
}