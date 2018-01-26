package com.outstandies;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class JwtDemoApplication {

    public static void main(String[] args) {
    	System.out.println("JwtDemoApplication");
        SpringApplication.run(JwtDemoApplication.class, args);
    }
}
