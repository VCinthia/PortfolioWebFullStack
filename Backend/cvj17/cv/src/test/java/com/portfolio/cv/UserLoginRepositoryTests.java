package com.portfolio.cv;

import com.portfolio.cv.Model.UserLogin;
import com.portfolio.cv.Repository.UserLoginRepository;
import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.annotation.Rollback;


@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@Rollback(false)
        
public class UserLoginRepositoryTests{
    @Autowired
    UserLoginRepository repository;
    
    @Test
    public void testCreateUser(){
        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String rawPassword="16011992";
        String encodePassword=passwordEncoder.encode(rawPassword);
        UserLogin newUserLogin=new UserLogin("cv@gmail.com", encodePassword);
        UserLogin savedUserLogin=repository.save(newUserLogin);
        assertThat(savedUserLogin).isNotNull();
        assertThat(savedUserLogin.getId()).isGreaterThan(0);        
    }
}
