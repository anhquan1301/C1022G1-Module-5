package com.example.demo.service.impl;

import com.example.demo.model.Users;
import com.example.demo.repository.IUserRepository;
import com.example.demo.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
public class UserServiceImpl implements IUserService {
    @Autowired
    IUserRepository userRepository;
    @Autowired
    @Lazy
     PasswordEncoder passwordEncoder;

    // ...

    @Override
    public Boolean checkIfValidOldPassword(Users users, String oldPassword) {
        return passwordEncoder.matches(oldPassword, users.getPassword());
    }

    @Override
    public Optional<Users> findByUsername(String name) {
        return userRepository.findByUsername(name);
    }

    @Override
    public Boolean existsByUsername(String username) {
        return userRepository.existsByUsername(username);
    }

    @Override
    public Boolean existsByEmail(String email) {
        return userRepository.existsByEmail(email);
    }

    @Override
    public Users save(Users users) {
        return userRepository.save(users);
    }


    @Override
    public void changeUserPassword(Users users, String newPassword) {
        users.setPassword(passwordEncoder.encode(newPassword));
        userRepository.save(users);
    }
}
