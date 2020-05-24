package com.blog.blogapi.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.blog.blogapi.dto.PostDto;
import com.blog.blogapi.manager.PostManager;
import com.blog.blogapi.model.entity.Post;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/post")
public class PostResource {

	@Autowired
	private PostManager postManager;

	@GetMapping
	public List<Post> getPost()
	{
		return postManager.getAllPosts();
	}

	@PostMapping(produces = "application/json", consumes = "application/json")
	public int createPost(@RequestBody PostDto newPost)
	{
		int newPostId = postManager.save(newPost);
		return newPostId;
	}
}
