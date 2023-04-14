package com.example.exam.repository;

import com.example.exam.model.BookType;
import com.example.exam.model.Books;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;

public interface IBooksRepository extends JpaRepository<Books,Integer> {
    @Query(value = "select * from books where name like %:name% and book_type_id like %:id% order by quantity asc",nativeQuery = true)
    Page<Books> findByName(@Param("name") String name,@Param("id") String bookType, Pageable pageable);
    @Query(value = "select * from books where id = :id",nativeQuery = true)
    Books findByIdBooks(@Param("id") Integer id);
    @Modifying
    @Transactional
    @Query(value = "insert into books(code,name,book_type_id,date,quantity) values (:code,:name,:book_type_id,:date,:quantity)",nativeQuery = true)
    void saveBooks(@Param("code")String code
            ,@Param("name")String name
            ,@Param("book_type_id") Integer bookTypeId
            ,@Param("date")String date
            ,@Param("quantity")String quantity);
    @Modifying
    @Transactional
    @Query(value = "delete from books where id = :id",nativeQuery = true)
    void deleteBooks(int id);
    @Modifying
    @Transactional
    @Query(value = "update books set code = :code, name = :name, book_type_id = :book_type_id, date = :date, quantity = :quantity where id = :id",nativeQuery = true)
    void edit(@Param("code")String code
            ,@Param("name")String name
            ,@Param("book_type_id") Integer bookTypeId
            ,@Param("date")String date
            ,@Param("quantity")String quantity
            ,@Param("id")Integer id);
}
