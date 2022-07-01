package com.portfolio.cv;

import com.portfolio.cv.Repository.UserLoginRepository;
import com.portfolio.cv.Security.jwt.JwtTokenFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;


@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)

public class ApplicationSecurityConfig extends WebSecurityConfigurerAdapter {
   @Autowired
   private UserLoginRepository userLoginRepository;
   @Autowired
   private JwtTokenFilter jwtTokenFilter;
   
   
   @Bean
   PasswordEncoder passwordEncoder(){
       return new BCryptPasswordEncoder();
   }
   //desde aca
   @Override
    protected void
            configure(AuthenticationManagerBuilder auth) throws
            Exception {
                
                auth.userDetailsService(username -> 
                   userLoginRepository.findByEmail(username)
                   .orElseThrow(()-> new 
                UsernameNotFoundException("No User"))
                );                
            }
                        
    @Override
    @Bean
    public AuthenticationManager authenticationManagerBean() throws Exception {
                return super.authenticationManagerBean();
            }
        
    @Override
    protected AuthenticationManager
            authenticationManager() throws Exception{
                return super.authenticationManager();
            }
    @Override
    protected void configure(HttpSecurity http) throws Exception{
        http.csrf().disable()
                .authorizeRequests().antMatchers("/api/**")
                .permitAll()
                .anyRequest()
                .authenticated()
                .and()
                .httpBasic();
        http.addFilterBefore(jwtTokenFilter,
        UsernamePasswordAuthenticationFilter.class);
    }
}
