package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.entity.EventDetails;
import com.example.demo.service.EventDetailsService;

import java.util.List;

@RestController
@RequestMapping("/auth/eventdetails")
@CrossOrigin("*")
public class EventDetailsController {

    @Autowired
    private EventDetailsService eventService;

    @GetMapping
    public List<EventDetails> getAllEvents() {
        return eventService.getAllEvents();
    }

    @GetMapping("/{id}")
    public EventDetails getEventById(@PathVariable int id) {
        EventDetails event = eventService.getEventById(id).orElse(null);
        if (event == null) {
            // You can handle not found event here, e.g., return a specific error response
            // or throw an exception.
        }
        return event;
    }

    @PostMapping
    public EventDetails createEvent(@RequestBody EventDetails event) {
        return eventService.createEvent(event);
    }

    @PutMapping("/{id}")
    public EventDetails updateEvent(@PathVariable int id, @RequestBody EventDetails event) {
        return eventService.updateEvent(id, event);
    }

    @DeleteMapping("/{id}")
    public void deleteEvent(@PathVariable int id) {
        eventService.deleteEvent(id);
    }
}

