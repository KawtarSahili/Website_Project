package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.sql.Timestamp;
import java.util.List;
import com.example.demo.model.TicketReply;
import com.example.demo.repository.TicketReplyRepository;


@Service
public class TicketReplyService {
    @Autowired
    private TicketReplyRepository replyRepo;

    public TicketReply addReply(TicketReply reply) {
        reply.setCreatedAt(new Timestamp(System.currentTimeMillis()));
        return replyRepo.save(reply);
    }

    public List<TicketReply> getReplies(Integer ticketId) {
        return replyRepo.findByTicket_TicketId(ticketId);
    }
}

