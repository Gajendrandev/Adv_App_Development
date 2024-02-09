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

import com.example.birthday.Entity.Bookings;
import com.example.birthday.Service.BookingService;

@RestController
@RequestMapping("/api/v1/user")

public class BookingController {
    @Autowired
    BookingService s;

    @GetMapping("/bookingsGet")
    public List<Bookings> showDetails() {
        return s.bookingsGetDetails();

    }

    @PostMapping("/bookingsPost")
    public String bookingsAddDetails(@RequestBody Bookings m) {
        s.bookingsAddDetails(m);
        return "Added " + m.getUser_id();
    }

    @PutMapping("/bookingsPut")
    public Bookings bookingsUpdateDetail(@RequestBody Bookings st) {
        return s.bookingsUpdateDetails(st);
    }

    @DeleteMapping("/bookingsDelete/{user_id}")
    public String bookingsDeleteDetail(@PathVariable("user_id") int user_id) {
        s.BookingsDeleteDetails(user_id);
        return "deleted details";
    }

}
