package com.example.exam.controller;

import com.example.exam.dto.BooksDTO;
import com.example.exam.model.Books;
import com.example.exam.service.IBookTypeService;
import com.example.exam.service.IBooksService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("books")
@CrossOrigin("*")
public class BooksController {
    @Autowired
    private IBooksService iBooksService;
    @ResponseStatus(HttpStatus.OK)
    @GetMapping("")
    public Page<Books> showListBook(@RequestParam(required = false, defaultValue = "")String name,
                                    @RequestParam(required = false,defaultValue = "")String bookType,
                                    @PageableDefault(size = 3) Pageable pageable){
        return iBooksService.findByName(name,bookType,pageable);
    }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/detail")
    public Books detail(@RequestParam(required = false)Integer id){
        return iBooksService.findByIdBooks(id);
    }
    @PostMapping("")
    public ResponseEntity<?> create(@Validated @RequestBody BooksDTO booksDTO, BindingResult bindingResult){
        if(!bindingResult.hasErrors()){
            iBooksService.create(booksDTO);
        }else {
            Map<String, String> map = new LinkedHashMap<>();
            List<FieldError> err = bindingResult.getFieldErrors();
            for (FieldError error : err){
                if(!map.containsKey(error.getField())){
                    map.put(error.getField(),error.getDefaultMessage());
                }
            }
            return new ResponseEntity<>(map,HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PutMapping("")
    public ResponseEntity<?> edit(@Validated @RequestBody BooksDTO booksDTO, BindingResult bindingResult){
        if(!bindingResult.hasErrors()){
            iBooksService.edit(booksDTO);
        }else {
            Map<String, String> map = new LinkedHashMap<>();
            List<FieldError> err = bindingResult.getFieldErrors();
            for (FieldError error : err){
                if(!map.containsKey(error.getField())){
                    map.put(error.getField(),error.getDefaultMessage());
                }
            }
            return new ResponseEntity<>(map,HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @DeleteMapping("")
    @ResponseStatus(HttpStatus.OK)
    public void delete(@RequestParam(required = false)Integer id){
        iBooksService.deleteBooks(id);
    }
}
