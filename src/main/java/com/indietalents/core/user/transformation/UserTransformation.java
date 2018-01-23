package com.indietalents.core.user.transformation;

import com.fasterxml.jackson.databind.JsonNode;
import com.indietalents.core.user.model.User;

public interface UserTransformation {

    User transform(JsonNode payloadNode);
}
