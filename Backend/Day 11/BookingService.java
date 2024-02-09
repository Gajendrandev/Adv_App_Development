package com.example.birthday.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.birthday.Entity.Bookings;
import com.example.birthday.Repository.BookingRepo;
import com.example.birthday.dto.BookingResponse;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class BookingService {
     @Autowired
    BookingRepo r;

    public String bookingsAddDetails(Bookings m){
        r.save(m);
			return "Added";
    }

    public List<Bookings> bookingsGetDetails() {
        return r.findAll();
    }

    public Bookings bookingsUpdateDetails(Bookings e1) {
        return r.saveAndFlush(e1);
    }

    public void BookingsDeleteDetails(int user_id) {
        r.deleteById(user_id);
    }

    public BookingResponse getBooking(int user_id){
        Bookings booking = r.findById(user_id).orElseThrow();
        var userBook = BookingResponse.builder().booking_id(booking.getBooking_id()).user_id(booking.getUser_id()).package_name(booking.getPackage_name()).venue(booking.getVenue()).food(booking.getFood()).member(booking.getMember()).venue(booking.getVenue()).build();
        return userBook;
        
    }

}
