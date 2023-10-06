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

import com.example.Unplugged.Entity.UserLogin;
import com.example.Unplugged.Service.UserLoginService;

@RestController
@RequestMapping("/login")
public class UserLoginController {
	@Autowired
    private UserLoginService userService;


    // for posting
    @PostMapping("/userpost")
    public UserLogin saveUsers(@RequestBody UserLogin user){
        return userService.saveUsers(user);
    }

    // for fetching the data
    @GetMapping("/getLoginUsers")
    public List<UserLogin> getAllUsers(){
        return userService.getAllUsers();
    }

    // fetch data by the id
    @GetMapping("/Login/{id}")
    public ResponseEntity<Optional<UserLogin>> getUserById(@PathVariable int id) {
        return userService.getUserById(id);
    }

    // delete data by id
    @DeleteMapping("/deleteLoginUser/{id}")
    public String deleteUserById(@PathVariable int id){
        return userService.deleteUserById(id);
    }

    // delete all
    @DeleteMapping("deleteLoginAll")
    public String deleteAll(){
        return userService.deleteAll();
    }

    // update by id
    @PutMapping("/updateLoginUsers/{id}")
    public UserLogin updateUsers(@RequestBody UserLogin users, @PathVariable int id){
        return userService.updateUsers(users, id);
    }
    
    @GetMapping("/welcome")
    public String Hello()
    {
    	return "Login Successfully";
    }
}