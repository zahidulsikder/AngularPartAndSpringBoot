import { Component } from '@angular/core';
import { Roomtype } from 'src/app/model/roomtype.model';
import { RoomTypeService } from 'src/app/service/room-type.service';

@Component({
  selector: 'app-room-type-create',
  templateUrl: './room-type-create.component.html',
  styleUrls: ['./room-type-create.component.css']
})
export class RoomTypeCreateComponent {

  rt: Roomtype = new Roomtype();
  submitted=false;

  constructor(
    private roomtypeService : RoomTypeService) { }

  ngOnInit(): void {
    
  }

 



  roomtypeAdd(){
    this.submitted = true;
    this.roomtypeService.createRoomType(this.rt).subscribe(
      data => alert('Roomtype added successfull!!'),
       error => alert('Something is wrong, please try again!!')    
    ); 

  }
}
