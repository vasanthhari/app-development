package com.example.demo.entity;



import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import lombok.Getter;

import lombok.Setter;

@Entity
@Getter
@Setter

public class Payment {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    public Payment(int id, String name, String gender, String email, String pincode, String cardType,
			String cardNumber, String expDate, String cvv) {
		super();
		this.id = id;
		this.name = name;
		this.gender = gender;
		this.email = email;
		this.pincode = pincode;
		this.cardType = cardType;
		this.cardNumber = cardNumber;
		this.expDate = expDate;
		this.cvv = cvv;
	}
	private String name;
    private String gender;
    private String email;
    private String pincode;
    private String cardType;
    private String cardNumber;
    private String expDate;
    private String cvv;
}