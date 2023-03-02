import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/model/hotel.model';
import { HotelService } from 'src/app/service/hotel.service';
import { LocationService } from 'src/app/service/location.service';

@Component({
  selector: 'app-hotel-create',
  templateUrl: './hotel-create.component.html',
  styleUrls: ['./hotel-create.component.css']
})
export class HotelCreateComponent implements OnInit{

  hotel : Hotel = new Hotel();
  constructor(
    private locationService: LocationService,
    private hotelService: HotelService
  ) { }

 
  locationList:any;

  ngOnInit() {
    this.locationList = this.locationService.getAllLocation();
  }

  locationId?:any;
  getLid(value:any){
    this.locationId=value;
  }

  hotelCreate(){
    
  }

}
