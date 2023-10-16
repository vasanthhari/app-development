package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Payment;
import com.example.demo.service.PaymentService;

@RestController
@CrossOrigin("*")
@RequestMapping("/auth/payments")
public class PaymentController {
	@Autowired
    private PaymentService paymentService;

    @PostMapping("/postpayment")
    public Payment createPayment(@RequestBody Payment payment) {
        return paymentService.createPayment(payment);
    }

    @GetMapping("/getpayment")
    public Iterable<Payment> getAllPayments() {
        return paymentService.getAllPayments();
    }

    @GetMapping("/{id}")
    public Payment getPayment(@PathVariable int id) {
        return paymentService.getPaymentById(id);
    }
  

    @DeleteMapping("/{id}")
    public boolean deletePayment(@PathVariable int id) {
        return paymentService.deletePayment(id);
    }
}
