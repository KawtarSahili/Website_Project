package com.example.demo.controller;

import com.example.demo.model.SupportTicket;
import com.example.demo.service.SupportTicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tickets")
public class SupportTicketController {
    @Autowired
    private SupportTicketService ticketService;

    @GetMapping("/{userId}")
    public ResponseEntity<List<SupportTicket>> getTickets(@PathVariable Integer userId) {
        return ResponseEntity.ok(ticketService.getUserTickets(userId));
    }

    @PostMapping
    public ResponseEntity<SupportTicket> createTicket(@RequestBody SupportTicket ticket) {
        return ResponseEntity.ok(ticketService.createTicket(ticket));
    }
}
