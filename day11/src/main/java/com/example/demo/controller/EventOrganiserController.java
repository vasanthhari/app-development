package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.entity.EventOrganiser;
import com.example.demo.service.EventOrganiserService;

import java.util.List;
import java.util.Optional;
@CrossOrigin("*")
@RestController
@RequestMapping("/auth/organiser")
public class EventOrganiserController {

	@Autowired
    private  EventOrganiserService eventOrganiserController;

    @GetMapping
    public List<EventOrganiser> getAllEmployees() {
        return eventOrganiserController.getAllEmployee();
    }

    @GetMapping("/{id}")
    public Optional<EventOrganiser> getEmployeeById(@PathVariable int id) {
        return eventOrganiserController.getEmployeeById(id);
    }

    @PostMapping
    public EventOrganiser createEmployee(@RequestBody EventOrganiser EventOrganiserController) {
        return eventOrganiserController.createEmployee(EventOrganiserController);
    }

    @PutMapping("/{id}")
    public EventOrganiser updateEmployee(@PathVariable int id, @RequestBody EventOrganiser updatedEmployee) {
        return eventOrganiserController.updateEmployee(id, updatedEmployee);
    }

    @DeleteMapping("/{id}")
    public void deleteEmployee(@PathVariable int id) {
        eventOrganiserController.deleteEmployee(id);
    }
}
