package com.example.demo.controller;

import com.example.demo.model.Subscription;
import com.example.demo.service.SubscriptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/subscriptions")
public class SubscriptionController {
    @Autowired
    private SubscriptionService subscriptionService;

    @GetMapping("/{userId}")
    public ResponseEntity<List<Subscription>> getUserSubscriptions(@PathVariable Integer userId) {
        return ResponseEntity.ok(subscriptionService.getUserSubscriptions(userId));
    }

    @PostMapping
    public ResponseEntity<Subscription> subscribe(@RequestBody Subscription subscription) {
        return ResponseEntity.ok(subscriptionService.createSubscription(subscription));
    }
}
