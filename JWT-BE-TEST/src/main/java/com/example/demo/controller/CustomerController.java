package com.example.demo.controller;

import com.example.demo.model.Customer;
import com.example.demo.repository.ICustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.annotation.security.RolesAllowed;
import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/customer")
public class CustomerController {
    @Autowired

    ICustomerRepository iCustomerRepository;
    @GetMapping("")
    @ResponseStatus(HttpStatus.OK)
    @PreAuthorize("hasRole('ADMIN')")
    public List<Customer> showlist(){
        return iCustomerRepository.findAll();
    }

    @GetMapping("/detail")
    @ResponseStatus(HttpStatus.OK)
    public Customer detailCustomer(@RequestParam(required = false)String userName){
        return iCustomerRepository.findByUserName(userName);
    }
}
