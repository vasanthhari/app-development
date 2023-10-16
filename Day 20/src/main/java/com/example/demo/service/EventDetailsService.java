package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.EventDetails;
import com.example.demo.repository.EventDetailsRepository;

import java.util.List;
import java.util.Optional;

@Service
public class EventDetailsService {

    @Autowired
    private EventDetailsRepository eventRepository;

    public List<EventDetails> getAllEvents() {
        return eventRepository.findAll();
    }

    public Optional<EventDetails> getEventById(int id) {
        return eventRepository.findById(id);
    }

    public EventDetails createEvent(EventDetails event) {
        return eventRepository.save(event);
    }

    public EventDetails updateEvent(int id, EventDetails updatedEvent) {
        Optional<EventDetails> existingEvent = eventRepository.findById(id);
        if (existingEvent.isPresent()) {
            updatedEvent.setId(existingEvent.get().getId());
            return eventRepository.save(updatedEvent);
        }
        return null;
    }

    public void deleteEvent(int id) {
        eventRepository.deleteById(id);
    }
}

