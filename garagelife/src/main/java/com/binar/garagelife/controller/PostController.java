package com.binar.garagelife.controller;


import java.util.List;
import java.util.Optional;

import com.binar.garagelife.model.Post;
import com.binar.garagelife.service.PostService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class PostController{

    @Autowired
    private PostService postService;

    @RequestMapping(method = RequestMethod.GET, value = "/posts")
    public List<Post> getAllPost(){
        return postService.getAllPost();
    }

    @RequestMapping(method = RequestMethod.GET, value = "/posts/{id}")
    public Optional<Post> getPostId(@PathVariable(value = "id") Long id){
        return postService.getPostId(id);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/posts")
    public void addPost(@RequestBody Post post){
        postService.addPost(post);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/posts/{id}")
    public void updatePost(@RequestBody Post post,@PathVariable Long id){
        postService.updatePost(id, post);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/posts/{id}")
    public void deleteTopic(@PathVariable Long id){
        postService.deleteUser(id);
    }

}