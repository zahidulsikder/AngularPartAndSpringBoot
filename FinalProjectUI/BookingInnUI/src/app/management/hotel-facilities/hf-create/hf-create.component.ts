import { Component, OnInit} from '@angular/core';
import { Hotelfacilities } from 'src/app/model/hotelfacilities.model';
import { HotelService } from 'src/app/service/hotel.service';

@Component({
  selector: 'app-hf-create',
  templateUrl: './hf-create.component.html',
  styleUrls: ['./hf-create.component.css']
})
export class HfCreateComponent implements OnInit{
  hf: Hotelfacilities = new Hotelfacilities();
  submitted=false;

  constructor(
    private hotelService : HotelService) { }

  ngOnInit(): void {
    
  }

  hFacilitiesAdd() {
    this.submitted = true;
    this.hotelService.createFacilities(this.hf).subscribe(
      data => alert('Hotel Facilities added successfull!!'),
       error => alert('Something is wrong, please try again!!')    
    );  
   
  }

}
