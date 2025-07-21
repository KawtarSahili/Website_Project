package com.example.demo.service;

import com.example.demo.model.Payment;
import com.example.demo.repository.PaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.sql.Timestamp;
import java.util.List;
import jakarta.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;


@Service
public class PaymentService {
    @Autowired
    private PaymentRepository paymentRepository;

    public List<Payment> getUserPayments(Integer userId) {
        return paymentRepository.findByUser_UserId(userId);
    }

    public Payment createPayment(Payment payment) {
        payment.setPaymentDate(new Timestamp(System.currentTimeMillis()));
        return paymentRepository.save(payment);
    }
}
