package com.binar.garagelife.repository;

import com.binar.garagelife.model.User;

import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {
    
}
