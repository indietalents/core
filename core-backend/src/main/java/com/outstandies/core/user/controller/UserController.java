package com.outstandies.core.user.controller;

import com.fasterxml.jackson.databind.JsonNode;
import com.outstandies.core.user.model.User;
import com.outstandies.core.user.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMethod;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/api/user")
    public User getUser(final @RequestParam(value = "email", defaultValue = "default@mail.com") String email) {
        return userService.getUserByEmail(email);
    }

    @PostMapping(path = "/api/users/add")
    public String addUser(final @RequestBody JsonNode requestBody) {
    	System.out.println("add user");
        userService.addUser(requestBody);
        return "{\"message\":\"User successfully added.\"}";
    }

    @RequestMapping(path = "/services/users/update", method = RequestMethod.POST)
    public String updateUser(final @RequestBody JsonNode requestBody) {
        userService.updateUser(requestBody);
        return "{\"message\":\"User successfully updated.\"}";
    }

    @RequestMapping(path = "/services/users/delete", method = RequestMethod.POST)
    public String deleteUser(final @RequestParam(value = "userId") Long userId ) {
        userService.deleteUser(userId);
        return "{\"message\":\"User successfully deleted.\"}";
    }
    
//    @GetMapping("/api/user/{id}")
//    public User getUser(final @PathVariable long id) {
//        return userService.getUserById(id);
//    }
//    
//    @PostMapping("/api/user")
//    public User createUser(final @PathVariable long id) {
//        return userService.getUserById(id);
//    }

}