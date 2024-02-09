package com.example.birthday.Controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.birthday.Entity.User;
import com.example.birthday.Service.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/user")
@RequiredArgsConstructor
public class userController {
    @Autowired
     private UserService s;

    @GetMapping("/get")
    public List<User> showDetails() {
        return s.getDetails();
    }
    @PostMapping("/post")
    public String addDetails(@RequestBody User m) {
        s.addDetails(m);
        return "Added " + m.getId();
    }
    @PutMapping("/put")
    public User updateDetail(@RequestBody User st) {
        return s.updateDetails(st);
    }
    @DeleteMapping("/delete/{userid}")
    public String deleteDetail(@PathVariable("userid") int userid) {
        s.deleteDetails(userid);
        return "deleted details";
    }
}
