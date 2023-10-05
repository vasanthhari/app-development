package com.example.Unplugged.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Unplugged.Entity.UserRegister;
import com.example.Unplugged.Service.UserRegisterService;

@RestController
@RequestMapping("/unplugged")
public class UserRegisterController {
	@Autowired
    private UserRegisterService userService;


    // for posting
    @PostMapping("/post")
    public UserRegister saveUsers(@RequestBody UserRegister user){
        return userService.saveUsers(user);
    }

    // for fetching the data
    @GetMapping("/getUsers")
    public List<UserRegister> getAllUsers(){
        return userService.getAllUsers();
    }

    // fetch data by the id
    @GetMapping("{id}")
    public ResponseEntity<Optional<UserRegister>> getUserById(@PathVariable int id) {
        return userService.getUserById(id);
    }

    // delete data by id
    @DeleteMapping("/deleteUser/{id}")
    public String deleteUserById(@PathVariable int id){
        return userService.deleteUserById(id);
    }

    // delete all
    @DeleteMapping("deleteAll")
    public String deleteAll(){
        return userService.deleteAll();
    }

    // update by id
    @PutMapping("/updateUsers/{id}")
    public UserRegister updateUsers(@RequestBody UserRegister users, @PathVariable int id){
        return userService.updateUsers(users, id);
    }


}
