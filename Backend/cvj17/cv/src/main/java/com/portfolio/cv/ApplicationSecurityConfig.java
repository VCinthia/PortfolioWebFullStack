package com.portfolio.cv;

import com.portfolio.cv.Repository.UserLoginRepository;
import com.portfolio.cv.Security.jwt.JwtTokenFilter;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.persistence.EntityManager;


@Configuration
@EnableWebSecurity(debug = true)
//@EnableGlobalMethodSecurity(prePostEnabled = true)

public class ApplicationSecurityConfig extends WebSecurityConfigurerAdapter {
    @Autowired
    private UserLoginRepository userRepository;
   
    @Autowired
    private JwtTokenFilter jwtTokenFilter;
      
    @Bean
    PasswordEncoder passwordEncoder(){
       return new BCryptPasswordEncoder();
    }
    //desde aca ver
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
                auth.userDetailsService(username -> 
                   userRepository.findByEmail(username)
                   .orElseThrow(()-> new UsernameNotFoundException("No User"))
                );                
    }
    /*
    @Override
    @Bean
    public AuthenticationManager authenticationManagerBean() throws Exception{
        return super.authenticationManagerBean();
    }
    */
    /*
    @Override
    @Bean
    public AuthenticationManager authenticationManager(
            AuthenticationConfiguration authenticationConfiguration) throws Exception{
        return authenticationConfiguration.getAuthenticationManager();
    }
    */
    
/*
    @Override
    protected AuthenticationManager
           authenticationManager() throws Exception{
                return super.authenticationManager();
    }
*/
           
    @Override
    protected void configure(HttpSecurity http) throws Exception{
        http.csrf().disable()
                .authorizeHttpRequests().antMatchers("/**")
                .permitAll()
                .anyRequest()
                .authenticated()
                .and()
                .httpBasic();
        http.addFilterBefore(jwtTokenFilter,
        UsernamePasswordAuthenticationFilter.class);
    }
    
    @Bean
    protected AuthenticationManager getAuthenticationManager() throws Exception {
        return super.authenticationManagerBean();
    }
   
/*MAS SENCILLO SIN SEG.    
   @Override
   protected void configure(AuthenticationManagerBuilder auth) throws
            Exception {
       auth
              .inMemoryAuthentication()
              .withUser("votacinthia@gmail.com")
              .password("16011992")
              .roles("ADMIN");
   }*/
        
}
