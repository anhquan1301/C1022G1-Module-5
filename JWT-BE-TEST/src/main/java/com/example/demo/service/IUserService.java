package com.example.demo.service;

import com.example.demo.model.Users;
import org.springframework.data.jpa.repository.Modifying;

import javax.transaction.Transactional;
import java.util.Optional;

public interface IUserService {
    Optional<Users> findByUsername(String name); //Tim kiem User co ton tai trong DB khong?
    Boolean existsByUsername(String username);
    Boolean existsByEmail(String email);
    Users save(Users users);

    Boolean checkIfValidOldPassword(Users users, String oldPassword);

    void changeUserPassword(Users users,String newPassword);
}
