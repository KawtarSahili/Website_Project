package com.example.demo.controller;

import com.example.demo.model.Invoice;
import com.example.demo.service.InvoiceService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequestMapping("/api/invoices")
@RequiredArgsConstructor
public class InvoiceController {

    private final InvoiceService invoiceService;

    @GetMapping("/me")
    public ResponseEntity<List<Invoice>> getMyInvoices(Authentication authentication) {
        String username = authentication.getName();
        List<Invoice> invoices = invoiceService.getInvoicesForUser(username);
        return ResponseEntity.ok(invoices);
    }
}

