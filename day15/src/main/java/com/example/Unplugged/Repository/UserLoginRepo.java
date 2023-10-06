package com.example.Unplugged.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Unplugged.Entity.UserLogin;

public interface UserLoginRepo extends JpaRepository<UserLogin,Integer> {

}