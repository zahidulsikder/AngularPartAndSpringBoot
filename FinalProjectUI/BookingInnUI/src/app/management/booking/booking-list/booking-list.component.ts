import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/service/booking.service';
import { RoomService } from 'src/app/service/room.service';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit{
  constructor( 
    private bookingService : BookingService
    ){}
  
    bookingList: any;
  
    ngOnInit(){
    this.bookingList = this.bookingService.getAllBooking();
    }
  
}
