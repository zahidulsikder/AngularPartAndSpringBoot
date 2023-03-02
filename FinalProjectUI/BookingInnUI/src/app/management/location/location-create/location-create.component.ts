import { Component } from '@angular/core';
import { Location } from 'src/app/model/location.model';
import { LocationService } from 'src/app/service/location.service';

@Component({
  selector: 'app-location-create',
  templateUrl: './location-create.component.html',
  styleUrls: ['./location-create.component.css']
})
export class LocationCreateComponent {

  l: Location = new Location();
  submitted=false;

constructor(
  private locationService : LocationService
){

}

  locationAdd(){
      this.submitted = true;
      this.locationService.createlocation(this.l).subscribe(
        data => alert('Location added successfull!!'),
         error => alert('Something is wrong, please try again!!')    
      );  
     
   
  }

}
