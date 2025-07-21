package com.example.demo.controller;

import com.example.demo.model.User;
import com.example.demo.model.UserProfile;
import com.example.demo.repository.UserProfileRepository;
import com.example.demo.repository.UserRepository;
import com.example.demo.security.JwtUtils;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/profile")
public class ProfileController {

    @Autowired
    private JwtUtils jwtUtils;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserProfileRepository profileRepository;

    // GET /api/profile/me
    @GetMapping("/me")
    public ResponseEntity<?> getProfile(HttpServletRequest request) {
        String token = jwtUtils.extractTokenFromRequest(request);
        String email = jwtUtils.extractUsername(token);
        User user = userRepository.findByEmail(email).orElse(null);
        if (user == null) return ResponseEntity.status(401).body("Utilisateur non trouvé");

        Optional<UserProfile> profileOpt = profileRepository.findByUser_UserId(user.getUserId());
        return profileOpt.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // PUT /api/profile/me
    @PutMapping("/me")
    public ResponseEntity<?> updateProfile(HttpServletRequest request, @RequestBody UserProfile updatedProfile) {
        String token = jwtUtils.extractTokenFromRequest(request);
        String email = jwtUtils.extractUsername(token);
        User user = userRepository.findByEmail(email).orElse(null);
        if (user == null) return ResponseEntity.status(401).body("Utilisateur non trouvé");

        Optional<UserProfile> existing = profileRepository.findByUser_UserId(user.getUserId());
        if (existing.isPresent()) {
            // 4. Mise à jour du profil existant
            UserProfile currentProfile = existing.get();

            // Copie des champs modifiables
            currentProfile.setFirstName(updatedProfile.getFirstName());
            currentProfile.setLastName(updatedProfile.getLastName());
            currentProfile.setPhone(updatedProfile.getPhone());
            currentProfile.setAddress(updatedProfile.getAddress());

            // 5. Sauvegarde des modifications
            UserProfile savedProfile = profileRepository.save(currentProfile);
            return ResponseEntity.ok(savedProfile);
        } else {
            // 6. Création d'un nouveau profil s'il n'existe pas
            updatedProfile.setUser(user);
            UserProfile newProfile = profileRepository.save(updatedProfile);
            return ResponseEntity.status(HttpStatus.CREATED).body(newProfile);
        }
    }
}


