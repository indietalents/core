package com.indietalents.core.user.services;

import com.fasterxml.jackson.databind.JsonNode;
import com.indietalents.core.user.model.User;

public interface UserService {

    User getUserByEmail(String email);

    void addUser(JsonNode payloadNode);

    void updateUser(JsonNode payloadNode);

    void deleteUser(Long userId);
}
