package com.quizapp.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.quizapp.model.Quiz;
public interface QuizRepository extends JpaRepository<Quiz, Long> {}