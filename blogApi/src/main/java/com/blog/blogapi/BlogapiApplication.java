package com.blog.blogapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScan(basePackages = { "com.blog.blogapi" })
@EntityScan(basePackages = "com.blog.blogapi.model.entity")
@EnableJpaRepositories("com.blog.blogapi.dao")
public class BlogapiApplication {

	public static void main(String[] args)
	{
		SpringApplication.run(BlogapiApplication.class, args);
	}

}
