package com.blog.blogapi.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.blog.blogapi.model.entity.Comment;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Integer> {

}
