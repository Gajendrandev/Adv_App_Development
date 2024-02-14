package com.example.birthday.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.birthday.Entity.UserDetails;
import com.example.birthday.Repository.UserDetailRepo;
@Service
public class UserDetailService {
     @Autowired
    UserDetailRepo r;

    public String userAddDetails(UserDetails m){
        r.save(m);
		return "Added";
    }

    public List<UserDetails> userGetDetails() {
        return r.findAll();
    }

    public UserDetails userUpdateDetails(UserDetails e1) {
        return r.saveAndFlush(e1);
    }

    public void UserDeleteDetails(int userid) {
        r.deleteById(userid);
    }

}
