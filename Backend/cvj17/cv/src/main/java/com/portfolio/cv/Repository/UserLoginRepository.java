package com.portfolio.cv.Repository;

import com.portfolio.cv.Model.UserLogin;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserLoginRepository extends JpaRepository<UserLogin, Integer> {
    Optional<UserLogin> findByEmail(String email);
    
}
