package com.outstandies.core.user.services.impl;

import com.fasterxml.jackson.databind.JsonNode;
import com.outstandies.core.user.domain.UserDomain;
import com.outstandies.core.user.model.User;
import com.outstandies.core.user.persistence.UserDomainRepository;
import com.outstandies.core.user.services.UserService;
import com.outstandies.core.user.transformation.UserTransformation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserTransformation userTransformation;
    @Autowired
    private UserDomainRepository userRepository;

    @Override
    public User getUserByEmail(final String email) {
        return new User(userRepository.getUserByEmail(email));
    }

    @Override
    public void addUser(final JsonNode payloadNode) {
        User user = userTransformation.transform(payloadNode);
        userRepository.save(new UserDomain(user));
    }

    @Override
    public void updateUser(final JsonNode payloadNode) {
        User user = userTransformation.transform(payloadNode);
        userRepository.updateUser(user.getId(), user.getName(), user.getSurname(), user.getEmail());
    }

    @Override
    public void deleteUser(final Long userId) {
        userRepository.delete(userId);
    }
}
