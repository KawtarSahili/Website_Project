package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.sql.Timestamp;
import java.util.List;
import com.example.demo.model.SupportTicket;
import com.example.demo.repository.SupportTicketRepository;
import jakarta.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;


@Service
public class SupportTicketService {
    @Autowired
    private SupportTicketRepository ticketRepo;

    public SupportTicket createTicket(SupportTicket ticket) {
        ticket.setCreatedAt(new Timestamp(System.currentTimeMillis()));
        ticket.setStatus(SupportTicket.Status.open);
        return ticketRepo.save(ticket);
    }

    public List<SupportTicket> getUserTickets(Integer userId) {
        return ticketRepo.findByUser_UserId(userId);
    }
}
