package com.example.demo_final_test.controller;

import com.example.demo_final_test.model.News;
import com.example.demo_final_test.service.INewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class MainController {
    @Autowired
    private INewsService iNewsService;

    @GetMapping("/news")
    public List<News> getNews() {
        return (List<News>) iNewsService.findAll();
    }

    @PostMapping("/news")
    public void addNews(@RequestBody News news) {
        iNewsService.save(news);
    }
}
