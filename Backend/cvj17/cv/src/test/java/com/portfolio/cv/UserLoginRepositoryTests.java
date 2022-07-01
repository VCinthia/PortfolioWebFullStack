package com.portfolio.cv;

import com.portfolio.cv.Entity.UserLogin;
import com.portfolio.cv.Repository.UserLoginRepository;
import static org.assertj.core.api.Assertions.assertThat;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.annotation.Rollback;


@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@Rollback(false)
@SpringBootTest
        
public class UserLoginRepositoryTests{
    @Autowired
    UserLoginRepository repository;
    
    @Test
    public void testCreateUser(){
        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String rawPassword="16011992";
        String encodePassword=passwordEncoder.encode(rawPassword);
        UserLogin newUserLogin=new UserLogin("votacinthia@gmail.com", encodePassword);
        UserLogin savedUser=repository.save(newUserLogin);
        assertThat(savedUser).isNotNull();
        assertThat(savedUser.getId()).isGreaterThan(0);
        
    }
}
