package com.quizapp.model;
import javax.persistence.*;
@Entity
public class Quiz {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String questions;
    // Getters and Setters
}