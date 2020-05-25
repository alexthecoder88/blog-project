package com.blog.blogapi.resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

import com.blog.blogapi.dao.CommentRepository;
import com.blog.blogapi.dao.PostRepository;
import com.blog.blogapi.manager.CommentManager;
import com.blog.blogapi.manager.PostManager;

@WebMvcTest
public abstract class AbstractResourceTest {

	@Autowired
	protected MockMvc mockMvc;

	@MockBean
	protected PostManager postManager;

	@MockBean
	protected CommentManager commentManager;

	@MockBean
	protected CommentRepository commentRepository;

	@MockBean
	protected PostRepository postRepository;

}
