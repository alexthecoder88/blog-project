package com.blog.blogapi.model.entity;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Comment {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String comment;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "post_id", nullable = false)
	@JsonIgnore
	private Post post;

	public Comment(String comment) {

		this.comment = comment;
	}

	public Comment() {

	}

	public int getId()
	{
		return id;
	}

	public void setId(int id)
	{
		this.id = id;
	}

	public String getComment()
	{
		return comment;
	}

	public void setComment(String comment)
	{
		this.comment = comment;
	}

	public Post getPost()
	{
		return post;
	}

	public void setPost(Post post)
	{
		this.post = post;
	}

	@Override
	public String toString()
	{
		return "Comment [id=" + id + ", comment=" + comment + ", post=" + post + "]";
	}

}
