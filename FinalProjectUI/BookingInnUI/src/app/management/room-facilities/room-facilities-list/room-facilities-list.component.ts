import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RoomFacilitiesService } from 'src/app/service/room-facilities.service';

@Component({
  selector: 'app-room-facilities-list',
  templateUrl: './room-facilities-list.component.html',
  styleUrls: ['./room-facilities-list.component.css']
})
export class RoomFacilitiesListComponent {

  constructor( 
    private roomFacService : RoomFacilitiesService,
    private router:Router
    ){}
  
   roomFacilitiesList?: any;
  
    ngOnInit(){
    this.roomFacilitiesList = this.roomFacService.getAllRoomFacilities();
    }

   
    deleteRoomFacilities(id: number){
      this.roomFacService.deleteRoomFacilities(id).subscribe(
        data=>{alert('Room Facilities successfully deleted!!'); 
          this.ngOnInit(); 
        },
        error=>alert('Somethig wrong, please try again!!')      
        );         
    }

   
    updateRoomFacilities(id: number){
      this.router.navigate(['updateroomfacilities/',id]);
    }
}
