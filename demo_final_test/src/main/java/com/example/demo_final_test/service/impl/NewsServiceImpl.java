package com.example.demo_final_test.service.impl;

import com.example.demo_final_test.model.News;
import com.example.demo_final_test.repositories.NewsRepository;
import com.example.demo_final_test.service.INewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NewsServiceImpl implements INewsService {
    @Autowired
    private NewsRepository repository;

    @Override
    public List<News> findAll() {
        return repository.findAll();
    }

    @Override
    public void save(News news) {
        repository.save(news);
    }
}
