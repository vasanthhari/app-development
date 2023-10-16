package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.EventDetails;
@Repository
public interface EventDetailsRepository extends JpaRepository<EventDetails, Integer> {
}

