package com.example.demo.service;

import com.example.demo.model.Subscription;
import com.example.demo.repository.SubscriptionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.sql.Timestamp;
import java.util.List;
import jakarta.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;


@Service
public class SubscriptionService {
    @Autowired
    private SubscriptionRepository subscriptionRepository;

    public List<Subscription> getUserSubscriptions(Integer userId) {
        return subscriptionRepository.findByUser_UserId(userId);
    }

    public Subscription createSubscription(Subscription subscription) {
        subscription.setStartDate(new Timestamp(System.currentTimeMillis()));
        return subscriptionRepository.save(subscription);
    }
}
