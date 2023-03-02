import { Component,OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Room } from 'src/app/model/room.model';
import { HotelService } from 'src/app/service/hotel.service';
import { RoomFacilitiesService } from 'src/app/service/room-facilities.service';
import { RoomTypeService } from 'src/app/service/room-type.service';
import { RoomService } from 'src/app/service/room.service';

@Component({
  selector: 'app-room-update',
  templateUrl: './room-update.component.html',
  styleUrls: ['./room-update.component.css']
})
export class RoomUpdateComponent implements OnInit{
  @ViewChild('addroom')addroom:NgForm;
  
  id: number = 0;
  room : Room = new Room();
  constructor(
    private hotelService: HotelService,    
    private roomService: RoomService,
    private roomTypeSercice: RoomTypeService,
    private roomFacilitiesSercice: RoomFacilitiesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }


  hotelList:any;
  locationList:any;
  roomType:any;
  roomFacilities:any;

  roomArr:any;

  fkArr={
    "location":{
      "lid":""
    },

    "hotel":{
      "hid":""
    },

    "roomtype":{
      "rtid":""
    }
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.roomService.getRoomById(this.id).subscribe(
      data=>{
        this.roomArr=data;
        console.log(this.roomArr);
      }
    );
    this.locationList = this.hotelService.getAllLocation();
    this.roomType = this.roomTypeSercice.getAllRoomType();
    this.roomFacilities = this.roomFacilitiesSercice.getAllRoomFacilities();
  }

  locationId: any;
  getLid(value: any) {
    console.log(value)
    this.locationId=value;
    this.hotelList = this.hotelService.getAllHotelByLocation(this.locationId);
  }
  
  hotelId:any;
  getHid(value:any){
    console.log(value)
    this.hotelId=value;
  }


  submitted: boolean = false;
  roomUpdate() {
    // this.addroom.setValue(RoomFacilitiesService)


    // this.roomArr=this.addroom.value;
    // this.fkArr.location.lid=this.addroom.value.locatioId;
    // this.fkArr.hotel.hid=this.addroom.value.hotelId;
    // this.fkArr.roomtype.rtid=this.addroom.value.roomTypeId;

    // this.room=Object.assign(this.roomArr, this.fkArr);
    
    // this.submitted = true;
    // this.roomService.createRoom(this.room).subscribe(
    //   data => alert('Room added successfull!!'),

    //   error => alert('Something is wrong, please try again!!')

    // );
    // this.roomService.updateRoom(this.id, this.room).subscribe(
    //   data=> alert('Room update successfull!!'),
    //   error => alert('Something is wrong, please try again!!'));
    //   this.router.navigate(['/allroom']);
  }
  // updateFacilities(){
  //   this.hotelService.updateHFacilities(this.id, this.hf).subscribe(
  //     data => alert('Hotel facilities update successfull!!'),
  //      error => alert('Something is wrong, please try again!!'));
  //     //  this.ngOnInit();
  //   this.router.navigate(['/allfacilities']);
    
  // }

}
