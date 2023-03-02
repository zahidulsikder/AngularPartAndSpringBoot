import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HotelService } from 'src/app/service/hotel.service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent {
  constructor(
    private hotelService:HotelService,
    private router:Router
  ){
    
  }

  hotelList?:any;
  
    ngOnInit(){
    this.hotelList = this.hotelService.getAllHotel();
    }
  
    updateHotel(id:number){
      this.router.navigate(['updatehotel/',id]);
    }

    deleteHotel(value:any){

    }

}
