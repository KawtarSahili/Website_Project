package com.example.demo.controller;

import com.example.demo.model.TicketReply;
import com.example.demo.service.TicketReplyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/replies")
public class TicketReplyController {
    @Autowired
    private TicketReplyService replyService;

    @GetMapping("/{ticketId}")
    public ResponseEntity<List<TicketReply>> getReplies(@PathVariable Integer ticketId) {
        return ResponseEntity.ok(replyService.getReplies(ticketId));
    }

    @PostMapping
    public ResponseEntity<TicketReply> addReply(@RequestBody TicketReply reply) {
        return ResponseEntity.ok(replyService.addReply(reply));
    }
}
