package com.example.exam.repository;

import com.example.exam.model.BookType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface IBookTypeRepository extends JpaRepository<BookType,Integer> {
    @Query(value = "select * from book_type",nativeQuery = true)
    List<BookType> findAllBookType();

}
