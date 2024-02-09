package com.example.birthday.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "booking_detail")
public class Bookings {
    @Id
    @GeneratedValue
    private int booking_id;
    private int user_id;
    private String package_name;
    private String venue;
    private String food;
    private int member;
    private String events;

}
