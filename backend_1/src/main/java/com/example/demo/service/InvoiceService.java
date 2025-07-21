package com.example.demo.service;

import com.example.demo.model.Invoice;
import com.example.demo.model.User;
import com.example.demo.repository.InvoiceRepository;
import com.example.demo.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class InvoiceService {

    private final UserRepository userRepository;
    private final InvoiceRepository invoiceRepository;

    public List<Invoice> getInvoicesForUser(String username) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("Utilisateur non trouvé"));
        return invoiceRepository.findByUser(user);
    }
}

