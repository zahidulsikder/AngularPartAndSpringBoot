import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from 'src/app/model/booking.model';
import { BookingService } from 'src/app/service/booking.service';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.css']
})
export class PrintComponent {

  constructor(
    private bookingService: BookingService,
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }


  print(){
    this.blist = this.bookingService.getDataByBookingId(this.maxid).subscribe(
      data => {
        this.b = data;
        console.log(this.blist)
      }
    );
  }



  b: Booking = new Booking();
  maxid: number;

  blist?: any;


  ngOnInit() {


    this.bookingService.getMaxBookingId().subscribe(
      (value) => {
        console.log(value);
        this.maxid = value;
      }
    )


    this.blist = this.bookingService.getDataByBookingId(this.maxid).subscribe(
      data => {
        this.b = data;
        console.log(this.blist);
      }
    );
  

    

  }
}