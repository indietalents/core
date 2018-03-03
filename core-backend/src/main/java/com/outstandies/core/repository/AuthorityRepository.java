package com.outstandies.core.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.outstandies.core.model.Authority;

public interface AuthorityRepository extends JpaRepository<Authority, Long> {
  Authority findByName(String name);
}
