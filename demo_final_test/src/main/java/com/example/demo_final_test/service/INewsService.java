package com.example.demo_final_test.service;

import com.example.demo_final_test.model.News;

import java.util.List;

public interface INewsService {
    List<News> findAll();

    void save(News news);
}
