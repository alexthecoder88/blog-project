package com.blog.blogapi.resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.blog.blogapi.dto.CommentDto;
import com.blog.blogapi.manager.CommentManager;
import com.blog.blogapi.model.entity.Comment;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/post")
public class CommentResource {

	@Autowired
	private CommentManager commentManager;

	@GetMapping(value = "/{id}/comments")
	public Comment getCommentById(@PathVariable String id)
	{
		return commentManager.findById(Integer.parseInt(id));
	}

	@PostMapping(value = "/{id}/comment", produces = "application/json", consumes = "application/json")
	public int createComment(@RequestBody CommentDto commentDto, @PathVariable String id)
	{
		return commentManager.save(commentDto, Integer.parseInt(id));
	}

	@PutMapping(value = "/{id}/comment", produces = "application/json", consumes = "application/json")
	public int updateComment(@RequestBody CommentDto commentDto, @PathVariable String id)
	{
		return commentManager.updateComment(commentDto, Integer.parseInt(id));
	}

	@DeleteMapping(value = "/{id}/comments")
	public void deleteComment(@PathVariable String id)
	{
		commentManager.deleteComment(Integer.parseInt(id));
	}
}
