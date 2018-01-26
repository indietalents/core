package com.outstandies.core.user.transformation.impl;

import com.fasterxml.jackson.databind.JsonNode;
import com.outstandies.core.user.model.User;
import com.outstandies.core.user.transformation.UserTransformation;
import org.springframework.stereotype.Service;

@Service
public class UserTransformationImpl implements UserTransformation {

    private static final String NAME_KEY = "name";
    private static final String SURNAME_KEY = "surname";
    private static final String EMAIL_KEY = "email";
    private static final String ID_KEY = "id";

    @Override
    public User transform(final JsonNode payloadNode) {
        final User user = new User();
        user.setName(payloadNode.get(NAME_KEY).asText());
        user.setSurname(payloadNode.get(SURNAME_KEY).asText());
        user.setEmail(payloadNode.get(EMAIL_KEY).asText());
        final JsonNode idNode = payloadNode.get(ID_KEY);
        if (idNode != null && !idNode.isNull()) {
            user.setId(Long.parseLong(idNode.asText()));
        }
        return user;
    }
}
