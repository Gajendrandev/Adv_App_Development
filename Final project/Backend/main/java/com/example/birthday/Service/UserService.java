package com.example.birthday.Service;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.birthday.Entity.User;
import com.example.birthday.Repository.UserRepo;

@Service
public class UserService {
    @Autowired
    private UserRepo r;

    public String addDetails(User m){
        r.save(m);
			return "Added";
    }

    public List<User> getDetails() {
        return r.findAll();
    }

    public User updateDetails(User e1) {
        return r.saveAndFlush(e1);
    }

    public void deleteDetails(int userid) {
        r.deleteById(userid);
    }

}
