package com.example.Unplugged.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.Unplugged.Entity.UserRegister;

@Repository
public interface UserRegisterRepo extends JpaRepository<UserRegister,Integer>{

}
