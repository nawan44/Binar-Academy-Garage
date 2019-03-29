package com.binar.garagelife.repository;

import com.binar.garagelife.model.Post;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository("postRepository")
public interface PostRepository extends CrudRepository <Post, Long>{

    
}