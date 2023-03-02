import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomFacilities } from 'src/app/model/roomfacilities.model';
import { RoomFacilitiesService } from 'src/app/service/room-facilities.service';

@Component({
  selector: 'app-room-facilities-update',
  templateUrl: './room-facilities-update.component.html',
  styleUrls: ['./room-facilities-update.component.css']
})
export class RoomFacilitiesUpdateComponent {



  id: number = 0;
  rf: RoomFacilities = new RoomFacilities();

  constructor(private roomFacService: RoomFacilitiesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.roomFacService.getRoomFacById(this.id).subscribe(
      data => {
        this.rf = data;
      }
    );
  }

  roomFacilitiesUpdate(){
    this.roomFacService.updateRoomFacilities(this.id, this.rf).subscribe(
      data => alert('Roomfacilities updated successfull!!'),
       error => alert('Something is wrong, please try again!!'));
      //  this.ngOnInit();
    this.router.navigate(['/allroomfacilities']);
    
  }




 


}
