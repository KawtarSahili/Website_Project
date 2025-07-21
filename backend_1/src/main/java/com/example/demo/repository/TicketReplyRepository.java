package com.example.demo.repository;

import com.example.demo.model.TicketReply;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface TicketReplyRepository extends JpaRepository<TicketReply, Integer> {
    List<TicketReply> findByTicket_TicketId(Integer ticketId);
}
