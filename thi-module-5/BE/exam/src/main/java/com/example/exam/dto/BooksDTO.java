package com.example.exam.dto;

import com.example.exam.model.BookType;

import javax.persistence.*;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Positive;
import javax.validation.constraints.Size;

public class BooksDTO {

    private Integer id;
    @Pattern(regexp = "BO-[0-9]{4}$", message = "Mã sách có định dạng BO-XXXX (X là số)")
    private String code;
    @Size(max = 100, message = "Tên sách không dài quá 100 ký tự")
    private String name;

    private BookTypeDTO bookTypeDTO;

    private String date;
    @Positive(message = "Số lượng sách phải là số nguyên dương")
    private String quantity;

    public BooksDTO() {
    }


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public BookTypeDTO getBookTypeDTO() {
        return bookTypeDTO;
    }

    public void setBookTypeDTO(BookTypeDTO bookTypeDTO) {
        this.bookTypeDTO = bookTypeDTO;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getQuantity() {
        return quantity;
    }

    public void setQuantity(String quantity) {
        this.quantity = quantity;
    }
}
