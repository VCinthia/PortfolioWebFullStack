
package com.portfolio.cv.Security;
//Controlador de la autenticacion

import com.portfolio.cv.Entity.UserLogin;
import com.portfolio.cv.Security.jwt.JwtTokenUtil;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthApi {
    @Autowired
    AuthenticationManager authManager;
    @Autowired
    JwtTokenUtil jwtTokenUtil;
    @PostMapping("/login")//ver
    public ResponseEntity<?> login(@RequestBody @Valid AuthRequest request){
        try{
            Authentication authentication = authManager.authenticate(
            new UsernamePasswordAuthenticationToken(
                request.getEmail(),
                request.getPassword())
            );
            
            UserLogin userLogin = (UserLogin) authentication.getPrincipal();
            String accessToken = 
        jwtTokenUtil.generateAccessToken(userLogin);
            AuthResponse response = new 
        AuthResponse (userLogin.getEmail(),accessToken);
            
            return ResponseEntity.ok().body(response);
        } catch (BadCredentialsException ex){
             return
                     ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }
}
