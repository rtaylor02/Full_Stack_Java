package com.rtaylor02.employeemanagement.domain.port;

import com.rtaylor02.employeemanagement.domain.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
}
