package com.example.Unplugged.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.Unplugged.Entity.UserRegister;
import com.example.Unplugged.Repository.UserRegisterRepo;

@Service
public class UserRegisterService {
@Autowired
private UserRegisterRepo userRegister;
public UserRegister saveUsers(UserRegister user) {
    return userRegister.save(user);
}
public List<UserRegister> getAllUsers(){
    return userRegister.findAll();
}

public ResponseEntity<Optional<UserRegister>> getUserById(int id) {
    Optional<UserRegister> users = userRegister.findById(id);
    return ResponseEntity.ok(users);
}

public String deleteUserById(int id){
    userRegister.deleteById(id);
    return "user id : " + id + " deleted successfully .";
}

public String deleteAll(){
    userRegister.deleteAll();
    return "All user data deleted successfully .";
}

public UserRegister updateUsers(UserRegister users, int id) {
    // Check if the patient with the given ID exists before updating
    Optional<UserRegister> existUsers = userRegister.findById(id);

    if (userRegister.existsById(id)) {
        users.setId(id);
        return userRegister.save(users);
    }
    return users;
}
}
