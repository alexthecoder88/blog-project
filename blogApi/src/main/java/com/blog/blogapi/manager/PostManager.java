package com.blog.blogapi.manager;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.blog.blogapi.dao.PostRepository;
import com.blog.blogapi.dto.PostDto;
import com.blog.blogapi.model.entity.Post;

@Component
public class PostManager {

	@Autowired
	private PostRepository postRepository;

	public List<Post> getAllPosts()
	{
		List<Post> allExistingPosts = postRepository.findAll();
		return allExistingPosts;

	}

	public int save(PostDto postDto)
	{
		Post newPost = new Post(postDto.getTitle(), postDto.getContent());
		Post savedPost = postRepository.save(newPost);
		return savedPost.getId();

	}

	public Post findById(int postId)
	{
		return postRepository.findById(postId).get();

	}

	public void deletePost(int postId)
	{
		postRepository.deleteById(postId);

	}

	public int updatePost(PostDto postDto, int postId)
	{
		Post postToUpdate = postRepository.getOne(postId);
		postToUpdate.setTitle((postDto.getTitle()));
		postToUpdate.setContent(postDto.getContent());
		postRepository.save(postToUpdate);
		return postToUpdate.getId();

	}
}
