import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocationService } from 'src/app/service/location.service';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})
export class LocationListComponent {

  constructor( 
    private locationService : LocationService,
    private router:Router
    ){}


    locationList?:any;
    ngOnInit(){

      this.locationList=this.locationService.getAllLocation();
    }

    deleteLocation(id: number){
      this.locationService.deleteLocationById(id).subscribe(
        data=>{alert('Location successfully deleted!!'); 
          this.ngOnInit(); 
        },
        error=>alert('Somethig wrong, please try again!!')      
        );         
    }


    updateLocation(id:number){
        this.router.navigate(['/updatelocation', id]);
    }


}
