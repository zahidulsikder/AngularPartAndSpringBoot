import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hotel } from 'src/app/model/hotel.model';
import { HotelService } from 'src/app/service/hotel.service';

@Component({
  selector: 'app-hotel-update',
  templateUrl: './hotel-update.component.html',
  styleUrls: ['./hotel-update.component.css']
})
export class HotelUpdateComponent {

  id: number = 0;
  h: Hotel = new Hotel();

  constructor(private hotelService: HotelService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  // updateHotel(){
  //   this.hotelService.updateHotel(this.id, this.h).subscribe(
  //     data => alert('Hotel facilities update successfull!!'),
  //      error => alert('Something is wrong, please try again!!'));
  //     //  this.ngOnInit();
  //   this.router.navigate(['/allfacilities']);
    
  // }

}
