package com.example.demo.service.impl;

import com.example.demo.model.Users;
import com.example.demo.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;
import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import javax.naming.*;
import javax.servlet.http.HttpServletRequest;
import java.util.Hashtable;
import java.util.UUID;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;


    @Autowired
    private TemplateEngine templateEngine;

    public void sendForgotPasswordEmail(String to, String name, String resetLink) throws MessagingException {
        // Tạo mới một MimeMessage để gửi email
        MimeMessage message = mailSender.createMimeMessage();

        // Sử dụng MimeMessageHelper để thiết lập thông tin email
        MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");

        // Thiết lập thông tin người nhận và chủ đề email
        helper.setTo(to);
        helper.setSubject("Forgot Password");

        // Thiết lập nội dung email sử dụng Thymeleaf
        String content = getForgotPasswordEmailTemplate(name, resetLink);
        helper.setText(content, true);

        // Gửi email
        mailSender.send(message);
    }

    private String getForgotPasswordEmailTemplate(String name, String resetLink) {
        // Tạo mới một Context để đưa dữ liệu vào mẫu email
        Context context = new Context();
        context.setVariable("name", name);
        context.setVariable("link", resetLink);

        // Sử dụng TemplateEngine để kết hợp dữ liệu vào mẫu email
        String content = templateEngine.process("forgot-password-email", context);

        // Trả về nội dung email đã được tạo
        return content;
    }

}