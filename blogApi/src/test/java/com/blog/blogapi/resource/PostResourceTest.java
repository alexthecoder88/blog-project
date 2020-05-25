package com.blog.blogapi.resource;

import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.is;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.http.MediaType;

import com.blog.blogapi.model.entity.Post;

public class PostResourceTest extends AbstractResourceTest {
	@Test
	public void shouldReturnFoundComments() throws Exception
	{

		// given
		List<Post> posts = new ArrayList<>();
		posts.add(new Post(1, "teest", "description"));

		// when
		when(postManager.getAllPosts()).thenReturn(posts);

		// then
		mockMvc.perform(get("/post").accept(MediaType.APPLICATION_JSON)).andExpect(status().isOk())
				.andExpect(jsonPath("$", hasSize(1))).andExpect(jsonPath("$[0].id", is(1)))
				.andExpect(jsonPath("$[0].title", is("teest"))).andExpect(jsonPath("$[0].content", is("description")));

	}
}
