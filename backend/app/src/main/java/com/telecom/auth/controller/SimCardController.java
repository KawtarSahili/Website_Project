package com.telecom.auth.controller;

import com.telecom.auth.model.SimCard;
import com.telecom.auth.service.SimService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/sim-cards")
@RequiredArgsConstructor
public class SimCardController {
    private final SimService simService;

    @PostMapping("/assign")
    public ResponseEntity<SimCard> assignSimCard(
            @RequestParam String simNumber,
            @RequestParam Long userId) {
        return ResponseEntity.ok(
            simService.assignSimCardToUser(simNumber, userId)
        );
    }

    @PostMapping
    public ResponseEntity<SimCard> createSimCard(
            @RequestParam String simNumber,
            @RequestParam Long userId) {
        return ResponseEntity.ok(
            simService.createAndAssignSimCard(simNumber, userId)
        );
    }
}