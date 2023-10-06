package com.example.Unplugged.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.Unplugged.Entity.UserLogin;
import com.example.Unplugged.Repository.UserLoginRepo;

@Service
public class UserLoginService {
	@Autowired
	private UserLoginRepo userLogin;
	public UserLogin saveUsers(UserLogin user) {
	    return userLogin.save(user);
	}
	public List<UserLogin> getAllUsers(){
	    return userLogin.findAll();
	}

	public ResponseEntity<Optional<UserLogin>> getUserById(int id) {
	    Optional<UserLogin> users = userLogin.findById(id);
	    return ResponseEntity.ok(users);
	}

	public String deleteUserById(int id){
	    userLogin.deleteById(id);
	    return "user id : " + id + " deleted successfully .";
	}

	public String deleteAll(){
	    userLogin.deleteAll();
	    return "All user data deleted successfully .";
	}

	public UserLogin updateUsers(UserLogin users, int id) {
	    // Check if the patient with the given ID exists before updating
	    Optional<UserLogin> existUsers = userLogin.findById(id);

	    if (userLogin.existsById(id)) {
	        users.setId(id);
	        return userLogin.save(users);
	    }
	    return users;
	}
}