import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Roomtype } from 'src/app/model/roomtype.model';
import { RoomTypeService } from 'src/app/service/room-type.service';

@Component({
  selector: 'app-room-type-update',
  templateUrl: './room-type-update.component.html',
  styleUrls: ['./room-type-update.component.css']
})
export class RoomTypeUpdateComponent {


  id: number = 0;
  rt: Roomtype = new Roomtype();

  constructor(private roomtypeService: RoomTypeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    // this.hotelService.getAllHotelFacilities();
    this.roomtypeService.getRoomtypeById(this.id).subscribe(
      data => {
        this.rt = data;
      }
    );
  }

  roomtypeUpdate(){
    this.roomtypeService.updateRoomtype(this.id, this.rt).subscribe(
      data => alert('Roomtype update successfull!!'),
       error => alert('Something is wrong, please try again!!'));
      //  this.ngOnInit();
    this.router.navigate(['/allroomtype']);
    
  }

  
}
