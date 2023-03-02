import { Component } from '@angular/core';
import { RoomFacilities } from 'src/app/model/roomfacilities.model';
import { RoomFacilitiesService } from 'src/app/service/room-facilities.service';

@Component({
  selector: 'app-room-facilities-create',
  templateUrl: './room-facilities-create.component.html',
  styleUrls: ['./room-facilities-create.component.css']
})
export class RoomFacilitiesCreateComponent {
  rf: RoomFacilities = new RoomFacilities();
  submitted=false;

  constructor(
    private roomFacService : RoomFacilitiesService) { }

  ngOnInit(): void {
    
  }

 
  roomFacilitiesAdd(){
    this.submitted = true;
    this.roomFacService.createRoomFacilities(this.rf).subscribe(
      data => alert('Roomfacilities added successfully!!'),
       error => alert('Something is wrong, please try again!!')    
    ); 

  }
 
  

}
