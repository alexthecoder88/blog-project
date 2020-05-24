package com.blog.blogapi.manager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.blog.blogapi.dao.CommentRepository;
import com.blog.blogapi.dto.CommentDto;
import com.blog.blogapi.model.entity.Comment;
import com.blog.blogapi.model.entity.Post;

@Component
public class CommentManager {

	@Autowired
	private CommentRepository commentRepository;

	@Autowired
	private PostManager postManager;

	public int save(CommentDto commentDto, int postId)
	{
		Post post = postManager.findById(postId);
		Comment newComment = new Comment(commentDto.getComment());
		newComment.setPost(post);
		Comment savedComment = commentRepository.save(newComment);

		return savedComment.getId();

	}

	public Comment findById(int commentId)
	{
		return commentRepository.findById(commentId).get();

	}

	public int updateComment(CommentDto updatedCommentDto, int commentId)
	{
		Comment commentToUpdate = commentRepository.getOne(commentId);
		commentToUpdate.setComment(updatedCommentDto.getComment());
		commentRepository.save(commentToUpdate);
		return commentToUpdate.getId();

	}

	public void deleteComment(int commentId)
	{
		commentRepository.deleteById(commentId);

	}
}
