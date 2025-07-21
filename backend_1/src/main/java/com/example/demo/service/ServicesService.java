package com.example.demo.service;


import com.example.demo.repository.ServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ServicesService {
    @Autowired
    private ServiceRepository serviceRepository;

    public List<com.example.demo.model.Service> getActiveServices() {
        return serviceRepository.findByIsActiveTrue();
    }
}
