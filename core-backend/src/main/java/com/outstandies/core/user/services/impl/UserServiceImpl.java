package com.outstandies.core.user.services.impl;

import com.fasterxml.jackson.databind.JsonNode;
import com.outstandies.core.model.Authority;
import com.outstandies.core.model.UserRequest;
import com.outstandies.core.repository.UserRepository;
import com.outstandies.core.user.domain.UserDomain;
import com.outstandies.core.user.model.User;
import com.outstandies.core.user.persistence.UserDomainRepository;
import com.outstandies.core.user.services.AuthorityService;
import com.outstandies.core.user.services.UserService;
import com.outstandies.core.user.transformation.UserTransformation;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    /*@Autowired
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

	@Override
	public User getUserById(Long id) {
		return new User(userRepository.getUserById(id));
	}*/
	
	@Autowired
	  private UserRepository userRepository;

	  @Autowired
	  private PasswordEncoder passwordEncoder;

	  @Autowired
	  private AuthorityService authService;

	  public void resetCredentials() {
	    List<User> users = userRepository.findAll();
	    for (User user : users) {
	      user.setPassword(passwordEncoder.encode("123"));
	      userRepository.save(user);
	    }
	  }

	  @Override
	  // @PreAuthorize("hasRole('USER')")
	  public User findByUsername(String username) throws UsernameNotFoundException {
	    User u = userRepository.findByUsername(username);
	    return u;
	  }

	  @PreAuthorize("hasRole('ADMIN')")
	  public User findById(Long id) throws AccessDeniedException {
	    User u = userRepository.findOne(id);
	    return u;
	  }

	  @PreAuthorize("hasRole('ADMIN')")
	  public List<User> findAll() throws AccessDeniedException {
	    List<User> result = userRepository.findAll();
	    return result;
	  }

	  @Override
	  public User save(UserRequest userRequest) {
	    User user = new User();
	    user.setUsername(userRequest.getUsername());
	    user.setPassword(passwordEncoder.encode(userRequest.getPassword()));
	    user.setFirstname(userRequest.getFirstname());
	    user.setLastname(userRequest.getLastname());
	    List<Authority> auth = authService.findByname("ROLE_USER");
	    user.setAuthorities(auth);
	    this.userRepository.save(user);
	    return user;
	  }

	@Override
	public User getUserByEmail(String email) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public User getUserById(Long userId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void addUser(JsonNode payloadNode) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void updateUser(JsonNode payloadNode) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteUser(Long userId) {
		// TODO Auto-generated method stub
		
	}
}
