package com.example.exam.service.impl;

import com.example.exam.model.BookType;
import com.example.exam.repository.IBookTypeRepository;
import com.example.exam.service.IBookTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookTypeService implements IBookTypeService {
    @Autowired
    private IBookTypeRepository iBookTypeRepository;
    @Override
    public List<BookType> findBookType() {
        return iBookTypeRepository.findAllBookType();
    }
}
