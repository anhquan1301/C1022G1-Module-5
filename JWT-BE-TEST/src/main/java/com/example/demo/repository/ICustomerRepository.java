package com.example.demo.repository;

import com.example.demo.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ICustomerRepository extends JpaRepository<Customer,Integer> {
    @Query(value = "select * from customer c join users u on customer_id = c.id where username = :userName",nativeQuery = true)
    Customer findByUserName(@Param("userName") String userName);
}
