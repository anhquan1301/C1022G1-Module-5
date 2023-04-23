package com.example.demo.controller;

import com.example.demo.dto.ForgotPasswordRequest;
import com.example.demo.dto.request.SignInForm;
import com.example.demo.dto.request.SignUpForm;
import com.example.demo.dto.response.JwtResponse;
import com.example.demo.dto.response.ResponseMessage;
import com.example.demo.model.ChangePasswordRequest;
import com.example.demo.model.Role;
import com.example.demo.model.RoleName;
import com.example.demo.model.Users;
import com.example.demo.security.jwt.JwtProvider;
import com.example.demo.security.userpincal.UserPrinciple;
import com.example.demo.service.IUserService;
import com.example.demo.service.impl.RoleServiceImpl;
import com.example.demo.service.impl.UserServiceImpl;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.JwtException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.net.HttpURLConnection;
import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

//@RequestMapping("/api/auth")
@RestController
@CrossOrigin(origins = "*")
public class AuthController {

    @Autowired
    private IUserService iUserService;
    @Autowired
    UserServiceImpl userService;
    @Autowired
    RoleServiceImpl roleService;
    @Autowired
    PasswordEncoder passwordEncoder;
    @Autowired
    AuthenticationManager authenticationManager;
    @Autowired
    JwtProvider jwtProvider;
    @PostMapping("/signup")
    public ResponseEntity<?> register(@Valid @RequestBody SignUpForm signUpForm){
        if(userService.existsByUsername(signUpForm.getUsername())){
            return new ResponseEntity<>(new ResponseMessage("no_user"), HttpStatus.BAD_REQUEST);
        }
        if(userService.existsByEmail(signUpForm.getEmail())){
            return new ResponseEntity<>(new ResponseMessage("no_email"), HttpStatus.BAD_REQUEST);
        }
        if(signUpForm.getAvatar() == null || signUpForm.getAvatar().trim().isEmpty()){
            signUpForm.setAvatar("https://firebasestorage.googleapis.com/v0/b/chinhbeo-18d3b.appspot.com/o/avatar.png?alt=media&token=3511cf81-8df2-4483-82a8-17becfd03211");
        }
        Users users = new Users(signUpForm.getName(), signUpForm.getUsername(), signUpForm.getEmail(), passwordEncoder.encode(signUpForm.getPassword()), signUpForm.getAvatar());
        Set<String> strRoles = signUpForm.getRoles();
        Set<Role> roles = new HashSet<>();
        strRoles.forEach(role ->{
            switch (role){
                case "admin":
                    Role adminRole = roleService.findByName(RoleName.ROLE_ADMIN).orElseThrow( ()-> new RuntimeException("Role not found"));
                    roles.add(adminRole);
                    break;
                case "pm":
                    Role pmRole = roleService.findByName(RoleName.ROLE_PM).orElseThrow( ()-> new RuntimeException("Role not found"));
                    roles.add(pmRole);
                    break;
                default:
                    Role userRole = roleService.findByName(RoleName.ROLE_USER).orElseThrow( ()-> new RuntimeException("Role not found"));
                    roles.add(userRole);
            }
        });
        users.setRoles(roles);
        userService.save(users);
        return new ResponseEntity<>(new ResponseMessage("yes"), HttpStatus.OK);
    }
    @PostMapping("/signin")
    public ResponseEntity<?> login(@Valid @RequestBody SignInForm signInForm){
        if(!userService.existsByUsername(signInForm.getUsername())){
            return new ResponseEntity<>(new ResponseMessage("no_user"), HttpStatus.BAD_REQUEST);
        }else {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(signInForm.getUsername(), signInForm.getPassword())
            );
            SecurityContextHolder.getContext().setAuthentication(authentication);
            String token = jwtProvider.createToken(authentication);
            UserPrinciple userPrinciple = (UserPrinciple) authentication.getPrincipal();
            return ResponseEntity.ok(new JwtResponse(token, userPrinciple.getName(), userPrinciple.getAvatar(), userPrinciple.getAuthorities()));
        }
    }


    @PostMapping("/change-password")
    public ResponseEntity<?> changePassword(@RequestBody ChangePasswordRequest changePasswordRequest, HttpServletRequest request){

        // Lấy thông tin user từ token JWT
        final String requestTokenHeader = request.getHeader("Authorization");
        String username = null;
        String jwtToken = null;
        if (requestTokenHeader != null && requestTokenHeader.startsWith("Bearer ")) {
            jwtToken = requestTokenHeader.substring(7);
            try {
                username = jwtProvider.getUserNameFromToken(jwtToken);
            } catch (IllegalArgumentException e) {
                throw new JwtException("Unable to get JWT Token", e);
            } catch (ExpiredJwtException e) {
                throw new JwtException("JWT Token has expired", e);
            }
        } else {
            throw new JwtException("JWT Token does not begin with Bearer String");
        }

        // Kiểm tra mật khẩu hiện tại
        Users users = userService.findByUsername(username).orElseThrow(()-> new UsernameNotFoundException("User not found -> user name or password"));
        if (!userService.checkIfValidOldPassword(users, changePasswordRequest.getOldPassword())) {
            return new ResponseEntity<>(new ResponseMessage("Mật khẩu hiện tại không đúng"), HttpStatus.BAD_REQUEST);
        }else if (!changePasswordRequest.getNewPassword().equals(changePasswordRequest.getConfirmPassword())) {
            return new ResponseEntity<>(new ResponseMessage("Mật khẩu xác nhận không trùng khớp"), HttpStatus.BAD_REQUEST);
        }else {
            // Thay đổi mật khẩu mới
            userService.changeUserPassword(users, changePasswordRequest.getNewPassword());
            // Trả về token mới
            return ResponseEntity.ok(new ResponseMessage("Đổi mật khẩu thành công!"));
        }
    }
//
//    public ResponseEntity<?> processForgotPassword(@RequestBody ForgotPasswordRequest forgotPasswordRequest) {
//        String email = forgotPasswordRequest.getEmail();
//
//        Users users = userService.existsByEmail(email);
//        if (users == null) {
//            throw new ResourceNotFoundException("User", "email", email);
//        }
//
//        // Tạo mã xác thực ngẫu nhiên
//        String resetToken = UUID.randomUUID().toString();
//
//        // Lưu trữ mã xác thực và thông tin người dùng vào bộ nhớ tạm thời
//        jwtProvider.put(resetToken, users.getId());
//
//        // Tạo token JWT với thông tin mã xác thực và thời gian hết hạn
//        String token = jwtProvider.createToken(resetToken, JwtConstants.RESET_PASSWORD_EXPIRATION);
//
//        // Gửi email chứa đường dẫn reset password và token JWT
//        emailService.sendResetPasswordEmail(users.getEmail(), token);
//
//        return ResponseEntity.ok(new ApiResponse(true, "An email has been sent to " + email + " with further instructions."));
//    }
}
