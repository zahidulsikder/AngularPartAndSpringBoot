import { Component, OnInit, ViewChild } from '@angular/core';
import { Room } from 'src/app/model/room.model';
import { HotelService } from 'src/app/service/hotel.service';
import { RoomFacilitiesService } from 'src/app/service/room-facilities.service';
import { RoomTypeService } from 'src/app/service/room-type.service';
import { RoomService } from 'src/app/service/room.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-room-create',
  templateUrl: './room-create.component.html',
  styleUrls: ['./room-create.component.css']
})
export class RoomCreateComponent implements OnInit{

  @ViewChild('addroom')addroom:NgForm;
  
  room : Room = new Room();
  constructor(
    private hotelService: HotelService,    
    private roomService: RoomService,
    private roomTypeSercice: RoomTypeService,
    private roomFacilitiesSercice: RoomFacilitiesService
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
    this.locationList = this.hotelService.getAllLocation();
    this.roomType = this.roomTypeSercice.getAllRoomType();
    this.roomFacilities = this.roomFacilitiesSercice.getAllRoomFacilities();
    console.log(this.hotelList);
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

  images:File
  getImages(event:any){
    this.images=event.target.files[0];
    console.log(this.images);
  }


  submitted: boolean = false;
  roomAdd() {
    this.roomArr=this.addroom.value;
    this.fkArr.location.lid=this.addroom.value.locatioId;
    this.fkArr.hotel.hid=this.addroom.value.hotelId;
    this.fkArr.roomtype.rtid=this.addroom.value.roomTypeId;

    this.room=Object.assign(this.roomArr, this.fkArr);
    
    this.submitted = true;
    this.roomService.uploadImg(this.images).subscribe(
      data=>{
        this.roomService.createRoom(this.room).subscribe(
          data => alert('Room added successfull!!'),
    
          error => alert('Something is wrong, please try again!!')
    
        );
      }
    )
        
  }


}
