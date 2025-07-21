package com.example.demo.repository;

import com.example.demo.model.User;
import com.example.demo.model.UserProfile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;


@Repository
public interface UserProfileRepository extends JpaRepository<UserProfile, Integer> {
    Optional<UserProfile> findByUser(User user);
    Optional<UserProfile> findByUser_UserId(Integer userId);

    //Optional<UserProfile> findByUserId(Integer userId);
}