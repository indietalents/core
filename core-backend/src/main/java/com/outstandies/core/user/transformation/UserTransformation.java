package com.outstandies.core.user.transformation;

import com.fasterxml.jackson.databind.JsonNode;
import com.outstandies.core.user.model.User;

public interface UserTransformation {

    User transform(JsonNode payloadNode);
}
