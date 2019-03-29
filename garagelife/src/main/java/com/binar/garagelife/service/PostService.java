package com.binar.garagelife.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.binar.garagelife.model.Post;
import com.binar.garagelife.repository.PostRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PostService{

    @Autowired
    PostRepository postRepository;

    public List<Post> getAllPost(){
        List<Post> posts = new ArrayList<>();
        postRepository.findAll()
        .forEach(posts::add);
        return posts;
    }

    public Optional<Post> getPostId(Long id){
        return postRepository.findById(id);
    }

    public void addPost(Post post){
        postRepository.save(post);
    }

    public void updatePost(Long id, Post post){
        postRepository.save(post);
    }

    public void deleteUser(Long id){
        postRepository.deleteById(id);
    }
}