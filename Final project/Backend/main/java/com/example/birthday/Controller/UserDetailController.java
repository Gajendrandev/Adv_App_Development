package com.example.birthday.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.birthday.Entity.UserDetails;
import com.example.birthday.Service.UserDetailService;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/auth")
public class UserDetailController {
    @Autowired
    UserDetailService s;


    @GetMapping("/getUsersDetails")
    public List<UserDetails> showDetails() {
        return s.userGetDetails();

    }

    @PostMapping("/userPost")
    public String userAddDetails(@RequestBody UserDetails m) {
        s.userAddDetails(m);
        return "Added " + m.getUserid();
    }

    @PutMapping("/userPut")
    public UserDetails userUpdateDetail(@RequestBody UserDetails st) {
        return s.userUpdateDetails(st);
    }

    @DeleteMapping("/userDelete/{userid}")
    public String userDeleteDetail(@PathVariable("userid") int userid) {
        s.UserDeleteDetails(userid);
        return "deleted details";
    }

}
