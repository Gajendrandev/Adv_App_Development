package com.example.birthday.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BookingRequest {
    private int booking_id;
    private int user_id;
    private String package_name;
    private String venue;
    private String food;
    private int member;
    private String events;

}
