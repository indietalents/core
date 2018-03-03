package com.outstandies.core.user.controller;

import com.fasterxml.jackson.databind.JsonNode;
import com.outstandies.core.exception.ResourceConflictException;
import com.outstandies.core.model.UserRequest;
import com.outstandies.core.user.model.User;
import com.outstandies.core.user.services.UserService;

import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMethod;

@RestController
@RequestMapping(value = "/api", produces = MediaType.APPLICATION_JSON_VALUE)
public class UserController {

//    @Autowired
//    private UserService userService;
//
//    @GetMapping("/api/user")
//    public User getUser(final @RequestParam(value = "email", defaultValue = "default@mail.com") String email) {
//        return userService.getUserByEmail(email);
//    }
//
//    @PostMapping(path = "/api/users/add")
//    public String addUser(final @RequestBody JsonNode requestBody) {
//    	System.out.println("add user");
//        userService.addUser(requestBody);
//        return "{\"message\":\"User successfully added.\"}";
//    }
//
//    @RequestMapping(path = "/services/users/update", method = RequestMethod.POST)
//    public String updateUser(final @RequestBody JsonNode requestBody) {
//        userService.updateUser(requestBody);
//        return "{\"message\":\"User successfully updated.\"}";
//    }
//
//    @RequestMapping(path = "/services/users/delete", method = RequestMethod.POST)
//    public String deleteUser(final @RequestParam(value = "userId") Long userId ) {
//        userService.deleteUser(userId);
//        return "{\"message\":\"User successfully deleted.\"}";
//	  }
	
	
	
	  @Autowired
	  private UserService userService;


	  @RequestMapping(method = GET, value = "/user/{userId}")
	  public User loadById(@PathVariable Long userId) {
		  System.out.println("/user/{userId}");
	    return this.userService.findById(userId);
	  }

	  @RequestMapping(method = GET, value = "/user/all")
	  public List<User> loadAll() {
		  System.out.println("/user/all");
	    return this.userService.findAll();
	  }

	  @RequestMapping(method = GET, value = "/user/reset-credentials")
	  public ResponseEntity<Map> resetCredentials() {
	    this.userService.resetCredentials();
	    Map<String, String> result = new HashMap<>();
	    result.put("result", "success");
	    return ResponseEntity.accepted().body(result);
	  }


	  @RequestMapping(method = POST, value = "/signup")
	  public ResponseEntity<?> addUser(@RequestBody UserRequest userRequest,
	      UriComponentsBuilder ucBuilder) {
		  System.out.println("/signup");

	    User existUser = this.userService.findByUsername(userRequest.getUsername());
	    if (existUser != null) {
	      throw new ResourceConflictException(userRequest.getId(), "Username already exists");
	    }
	    User user = this.userService.save(userRequest);
	    HttpHeaders headers = new HttpHeaders();
	    headers.setLocation(ucBuilder.path("/api/user/{userId}").buildAndExpand(user.getId()).toUri());
	    return new ResponseEntity<User>(user, HttpStatus.CREATED);
	  }

	  /*
	   * We are not using userService.findByUsername here(we could), so it is good that we are making
	   * sure that the user has role "ROLE_USER" to access this endpoint.
	   */
	  @RequestMapping("/whoami")
	  @PreAuthorize("hasRole('USER')")
	  public User user() {
		  System.out.println("/whoami");
	    return (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
	  }
	
	
    

}
