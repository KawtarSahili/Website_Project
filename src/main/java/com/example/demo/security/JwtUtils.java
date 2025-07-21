package com.example.demo.security;

import com.example.demo.model.User;
import io.jsonwebtoken.*;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.stereotype.Component;

import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.util.Date;

@Component
public class JwtUtils {

    private final String jwtSecret = "mySecretKeyForJwtTokenGeneration123456789"; // ➕ change for production
    private final long jwtExpirationMs = 86400000; // 24h

    public String generateToken(User user) {
        return Jwts.builder()
                .setSubject(user.getEmail())
                .claim("role", user.getRole().name())
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + jwtExpirationMs))
                .signWith(getSignInKey(), SignatureAlgorithm.HS256)
                .compact();
    }

    public String getEmailFromJwtToken(String token) {
        return parseClaims(token).getBody().getSubject();
    }

    public boolean validateJwtToken(String token) {
        try {
            parseClaims(token);
            return true;
        } catch (JwtException | IllegalArgumentException e) {
            return false;
        }
    }

    private Jws<Claims> parseClaims(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(getSignInKey())
                .build()
                .parseClaimsJws(token);
    }

    private Key getSignInKey() {
        return Keys.hmacShaKeyFor(jwtSecret.getBytes(StandardCharsets.UTF_8));
    }

    public String extractTokenFromRequest(HttpServletRequest request) {
        // 1. Check Authorization header (Bearer token)
        final String authorizationHeader = request.getHeader("Authorization");

        if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
            return authorizationHeader.substring(7); // Remove "Bearer " prefix
        }

        // 2. Check URL parameter (for WebSocket or special cases)
        String token = request.getParameter("token");
        if (token != null && !token.isBlank()) {
            return token;
        }

        // 3. Check cookies (alternative storage)
        Cookie[] cookies = request.getCookies();
        if (cookies != null) {
            for (Cookie cookie : cookies) {
                if ("auth_token".equals(cookie.getName())) {
                    return cookie.getValue();
                }
            }
        }

        // 4. Return null if no token found
        return null;

    }

    public String extractUsername(String token) {
        if (token == null || token.isBlank()) {
            throw new IllegalArgumentException("Token cannot be null or empty");
        }

        try {
            // 1. Create signing key (use your actual secret key)
            Key key = Keys.hmacShaKeyFor("your-secret-key-here-1234567890".getBytes());

            // 2. Parse and verify the token
            Claims claims = Jwts.parserBuilder()
                    .setSigningKey(key)
                    .build()
                    .parseClaimsJws(token)
                    .getBody();

            // 3. Extract username (stored in the "sub" claim by convention)
            return claims.getSubject();

        } catch (Exception e) {
            throw new SecurityException("Invalid JWT token: " + e.getMessage());
        }
    }
}
