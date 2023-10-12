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
public class EventEntity {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
private int id;
private String event;
private String date;
private int noOfMembers;
private String venue;
}