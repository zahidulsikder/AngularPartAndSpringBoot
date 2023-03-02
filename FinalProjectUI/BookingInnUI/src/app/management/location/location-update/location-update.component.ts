import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from 'src/app/model/location.model';
import { LocationService } from 'src/app/service/location.service';

@Component({
  selector: 'app-location-update',
  templateUrl: './location-update.component.html',
  styleUrls: ['./location-update.component.css']
})
export class LocationUpdateComponent {
l : Location = new Location();

id: number = 0;
constructor(private locationService: LocationService,
  private route: ActivatedRoute,
  private router: Router
) { }

ngOnInit(): void {
  this.id = this.route.snapshot.params['id'];
  this.locationService.getLocationById(this.id).subscribe(
    data => {
      this.l = data;
    }
  );
}



  locationUpdate(){
    this.locationService.updateLocation(this.id, this.l).subscribe(
      data => alert('Location updated successfully!!'),
       error => alert('Something is wrong, please try again!!'));
      //  this.ngOnInit();
    this.router.navigate(['/alllocation']);

  }

}
