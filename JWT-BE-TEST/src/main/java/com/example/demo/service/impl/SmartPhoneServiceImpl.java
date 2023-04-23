package com.example.demo.service.impl;


import com.example.demo.model.SmartPhone;
import com.example.demo.model.Users;
import com.example.demo.repository.ISmartPhoneRepository;
import com.example.demo.security.userpincal.UserDetailService;
import com.example.demo.service.ISmartPhoneService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SmartPhoneServiceImpl implements ISmartPhoneService {
    @Autowired
    ISmartPhoneRepository smartPhoneRepository;
    @Autowired
    UserDetailService userDetailsService;
    @Override
    public List<SmartPhone> findAll() {
        return smartPhoneRepository.findAll();
    }

    @Override
    public Optional<SmartPhone> findById(Long id) {
        return smartPhoneRepository.findById(id);
    }

    @Override
    public void deleteById(Long id) {
        smartPhoneRepository.deleteById(id);
    }

    @Override
    public SmartPhone save(SmartPhone smartPhone) {
        Users users = userDetailsService.getCurrentUser();
        smartPhone.setUsers(users);
        return smartPhoneRepository.save(smartPhone);
    }

    @Override
    public List<SmartPhone> findAllByProducerContaining(String producer) {
        return smartPhoneRepository.findAllByProducerContaining(producer);
    }

    @Override
    public boolean existsByProducer(String producer) {
        return smartPhoneRepository.existsByProducer(producer);
    }
}