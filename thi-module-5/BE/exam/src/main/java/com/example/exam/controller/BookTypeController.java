package com.example.exam.controller;

import com.example.exam.model.BookType;
import com.example.exam.service.IBookTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/bookType")
@CrossOrigin("*")
public class BookTypeController {
    @Autowired
    private IBookTypeService iBookTypeService;
    @ResponseStatus(HttpStatus.OK)
    @GetMapping("")
    public List<BookType> showBookType(){
        return iBookTypeService.findBookType();
    }
}
