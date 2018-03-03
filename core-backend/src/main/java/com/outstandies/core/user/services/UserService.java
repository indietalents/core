package com.outstandies.core.user.services;

import java.util.List;

import com.fasterxml.jackson.databind.JsonNode;
import com.outstandies.core.model.UserRequest;
import com.outstandies.core.user.model.User;

public interface UserService {

    User getUserByEmail(String email);
    
    User getUserById(Long userId);

    void addUser(JsonNode payloadNode);

    void updateUser(JsonNode payloadNode);

    void deleteUser(Long userId);
    
    void resetCredentials();

    User findById(Long id);

    User findByUsername(String username);

    List<User> findAll();

    User save(UserRequest user);
}
