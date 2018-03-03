package com.outstandies.core.user.services;

import java.util.List;

import com.outstandies.core.model.Authority;

public interface AuthorityService {
  List<Authority> findById(Long id);

  List<Authority> findByname(String name);

}
