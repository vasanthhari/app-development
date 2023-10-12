package com.example.demo.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.EventOrganiser;
import com.example.demo.repository.EventOrganiserRepo;

import java.util.List;
import java.util.Optional;

@Service
public class EventOrganiserService {

	@Autowired
    private  EventOrganiserRepo eventOrganiserService;

    

    public List<EventOrganiser> getAllEmployee() {
        return eventOrganiserService.findAll();
    }

    public Optional<EventOrganiser> getEmployeeById(int id) {
        return eventOrganiserService.findById(id);
    }

    public EventOrganiser createEmployee(EventOrganiser EventOrganiserService) {
        return eventOrganiserService.save(EventOrganiserService);
    }

    public EventOrganiser updateEmployee(int id, EventOrganiser updatedEmployee) {
        Optional<EventOrganiser> existingEmployeeOptional = eventOrganiserService.findById(id);

        if (existingEmployeeOptional.isPresent()) {
            EventOrganiser existingEmployee = existingEmployeeOptional.get();
            existingEmployee.setOrgName(updatedEmployee.getOrgName());
            existingEmployee.setEmail(updatedEmployee.getEmail());
            existingEmployee.setContactnum(updatedEmployee.getContactnum());
         

            return eventOrganiserService.save(existingEmployee);
        } else {
            throw new RuntimeException("Employee not found with ID: " + id);
        }
    }

    public void deleteEmployee(int id) {
        eventOrganiserService.deleteById(id);
    }
}
