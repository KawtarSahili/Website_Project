package com.telecom.auth.controller;

import com.telecom.auth.service.VerificationCodeService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/verify")
@RequiredArgsConstructor
public class VerificationController {

    private final VerificationCodeService verificationCodeService;

    // Générer un code pour un numéro donné
    @PostMapping("/send")
    public String sendCode(@RequestParam String phone) {
        verificationCodeService.generateAndSendCode(phone);
        return "Code sent to " + phone;
    }

    // Vérifier un code pour un numéro donné
    @PostMapping("/check")
    public String checkCode(@RequestParam String phone, @RequestParam String code) {
        boolean valid = verificationCodeService.isValid(phone, code);
        return valid ? "✅ Code is valid" : "❌ Code is invalid or expired";
    }

    // Supprimer tous les codes liés à un numéro
    @DeleteMapping("/clear")
    public String clearCodes(@RequestParam String phone) {
        verificationCodeService.clear(phone);
        return "🗑️ Codes cleared for " + phone;
    }
}
