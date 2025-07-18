package com.telecom.auth.config;

import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.stereotype.Component;
import java.util.Collections;  // Add this import

@Component
public class CustomAuthenticationProvider implements AuthenticationProvider {

    @Override
    public Authentication authenticate(Authentication authentication) 
        throws AuthenticationException {
        // Implement your authentication logic here
        String username = authentication.getName();
        String password = authentication.getCredentials().toString();
        
        // Add your actual authentication logic
        // For now, just a simple example:
        if ("user".equals(username) && "password".equals(password)) {
            return new UsernamePasswordAuthenticationToken(
                username, password, Collections.emptyList());
        } else {
            throw new BadCredentialsException("Authentication failed");
        }
    }

    @Override
    public boolean supports(Class<?> authentication) {
        return authentication.equals(UsernamePasswordAuthenticationToken.class);
    }
}