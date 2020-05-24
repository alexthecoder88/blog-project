package com.blog.blogapi.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.blog.blogapi.model.entity.Post;

@Repository
public interface PostRepository extends JpaRepository<Post, Integer> {

}
