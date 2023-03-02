import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotelService } from 'src/app/service/hotel.service';

@Component({
  selector: 'app-hf-list',
  templateUrl: './hf-list.component.html',
  styleUrls: ['./hf-list.component.css']
})
export class HfListComponent implements OnInit{

constructor( 
  private hotelService : HotelService,
  private router:Router
  ){}

  hotelFacilitiesList?: any;

  ngOnInit(){
  this.hotelFacilitiesList = this.hotelService.getAllHotelFacilities();
  }
 
  deleteHotelFacilities(id: number){
    this.hotelService.deleteFacilities(id).subscribe(
      data=>{alert('Hotel Facilities successfully deleted!!'); 
        this.ngOnInit(); 
      },
      error=>alert('Somethig wrong, please try again!!')      
      );         
  }
 
  updateHotelFacilities(id: number){
    this.router.navigate(['updatefacilities/',id]);
  }
}
