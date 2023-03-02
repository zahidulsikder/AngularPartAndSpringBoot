import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiResponse } from 'src/app/model/api.response';
import { Hotelfacilities } from 'src/app/model/hotelfacilities.model';
import { HotelService } from 'src/app/service/hotel.service';

@Component({
  selector: 'app-hf-update',
  templateUrl: './hf-update.component.html',
  styleUrls: ['./hf-update.component.css']
})
export class HfUpdateComponent implements OnInit{


  id: number = 0;
  hf: Hotelfacilities = new Hotelfacilities();

  constructor(private hotelService: HotelService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    // this.hotelService.getAllHotelFacilities();
    this.hotelService.getFacilitiesById(this.id).subscribe(
      data => {
        this.hf = data;
      }
    );
  }

  updateFacilities(){
    this.hotelService.updateHFacilities(this.id, this.hf).subscribe(
      data => alert('Hotel facilities update successfull!!'),
       error => alert('Something is wrong, please try again!!'));
      //  this.ngOnInit();
    this.router.navigate(['/allfacilities']);
    
  }
}
