package com.example.exam.service;

import com.example.exam.dto.BooksDTO;
import com.example.exam.model.Books;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IBooksService {
    Page<Books> findByName(String name,String bookType, Pageable pageable);
    Books findByIdBooks(int id);
    void create(BooksDTO booksDTO);
    void edit(BooksDTO booksDTO);
    void deleteBooks(int id);
}
