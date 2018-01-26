package com.outstandies.core.user.persistence;

import com.outstandies.core.user.domain.UserDomain;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;


public interface UserDomainRepository extends CrudRepository<UserDomain, Long> {

    @Query("SELECT u FROM UserDomain u where u.email = :email")
    UserDomain getUserByEmail(@Param("email") String email);

    @Modifying
    @Transactional
    @Query("Update UserDomain u set u.name = :name, u.surname = :surname, email = :email where u.userId = :userId")
    void updateUser(@Param("userId") Long userId, @Param("name") String name, @Param("surname") String surname, @Param("email") String email);
}
