package com.example.exam.service.impl;

import com.example.exam.dto.BooksDTO;
import com.example.exam.model.BookType;
import com.example.exam.model.Books;
import com.example.exam.repository.IBooksRepository;
import com.example.exam.service.IBooksService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class BooksService implements IBooksService {
    @Autowired
    private IBooksRepository iBooksRepository;
    @Override
    public Page<Books> findByName(String name,String bookType, Pageable pageable) {
        return iBooksRepository.findByName(name,bookType,pageable);
    }

    @Override
    public Books findByIdBooks(int id) {
        return iBooksRepository.findByIdBooks(id);
    }

    @Override
    public void create(BooksDTO booksDTO) {
        Books books = new Books();
        books.setBookType(new BookType(booksDTO.getBookTypeDTO().getId()));
        BeanUtils.copyProperties(booksDTO,books);
        iBooksRepository.saveBooks(
                books.getCode(),
                books.getName(),
                books.getBookType().getId(),
                books.getDate(),
                books.getQuantity());
    }

    @Override
    public void edit(BooksDTO booksDTO) {
        Books books = new Books();
        books.setBookType(new BookType(booksDTO.getBookTypeDTO().getId()));
        BeanUtils.copyProperties(booksDTO,books);
        iBooksRepository.edit(
                books.getCode(),
                books.getName(),
                books.getBookType().getId(),
                books.getDate(),
                books.getQuantity(),
                books.getId());
    }

    @Override
    public void deleteBooks(int id) {
        iBooksRepository.deleteBooks(id);
    }
}
