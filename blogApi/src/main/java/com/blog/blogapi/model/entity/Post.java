package com.blog.blogapi.model.entity;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Post {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private String title;
	private String content;

	@OneToMany(mappedBy = "post", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private Set<Comment> comments;

	public Post() {

	}

	public Post(int id, String title, String content) {

		this.id = id;
		this.title = title;
		this.content = content;
	}

	public Post(String title, String content) {
		this.title = title;
		this.content = content;
	}

	public int getId()
	{
		return id;
	}

	public void setId(int id)
	{
		this.id = id;
	}

	public String getTitle()
	{
		return title;
	}

	public void setTitle(String title)
	{
		this.title = title;
	}

	public String getContent()
	{
		return content;
	}

	public void setContent(String content)
	{
		this.content = content;
	}

	public Set<Comment> getComments()
	{
		return comments;
	}

	public void setComments(Set<Comment> comments)
	{
		this.comments = comments;
	}

	@Override
	public String toString()
	{
		return "Post [id=" + id + ", title=" + title + ", content=" + content + ", comments=" + comments + "]";
	}

}
