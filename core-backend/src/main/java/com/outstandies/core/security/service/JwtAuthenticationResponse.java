package com.outstandies.core.security.service;

import java.io.Serializable;

public class JwtAuthenticationResponse implements Serializable {

    private static final long serialVersionUID = 1250166508152483573L;

    private final String token;

    public JwtAuthenticationResponse(String token) {
        this.token = token;
    }

    public String getToken() {
    	System.out.println("JwtAuthenticationResponse.getToken()");
        return this.token;
    }
}
