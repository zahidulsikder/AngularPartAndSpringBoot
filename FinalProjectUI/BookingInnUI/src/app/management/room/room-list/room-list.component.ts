import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoomService } from 'src/app/service/room.service';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit{
  constructor( 
    private roomService : RoomService,
    private router:Router,
    private sanitizer:DomSanitizer
    ){}

  
    ngOnInit(){
      this.getAllRoomList();
    }

    roomList:any[];
    xxRoom: any[];
    imgList:any[];
    x:any[];
    getAllRoomList(){
      this.roomService.getAllRoom().subscribe(
        data => {
          this.roomList=data;
          // this.xxRoom = data;
          console.log(data)
          this.roomService.getAllImg().subscribe(
            data => {
              this.imgList = data;
              this.x = this.roomList.map((item, i)=> Object.assign({}, item, 
                this.imgList.find(imgn => imgn.name == item.rgallery)
                ))

            }
          )
            
          
        }
      );
      
    }

    convertImg(imgbase64: any){
      return this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64, ${imgbase64}`)
    }

    imageGet:any;
    getImages(img:string){
      this.roomService.getImagesByName(img).subscribe(
        data=>{
          this.imageGet=data;
          console.log(this.imageGet);
          // return this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64, ${this.imageGet}`);
        }
      )
    }
  
  
    updateRoom(id: number){
      this.router.navigate(['updateroom/',id]);
    }

    deleteRoom(id: number){
      this.roomService.deleteRoom(id).subscribe(
        data=>{alert('Room successfully deleted!!');
        this.ngOnInit();   
        },
        error=>alert('Somethig wrong, please try again!!')      
        );        
    }

  //  myFunction(value:any) {
  //     var x = document.getElementById("changeStatus");
  //     if (x!.innerHTML === "Active") {        
  //       this.dactiveRoom(value);
  //       x!.innerHTML = "Dactive";
  //     } else {
  //       this.activeRoom(value);
  //       x!.innerHTML = "Active";
  //     }
  //   }  

    activeRoomBtn: boolean = true;
    dactiveRoomBtn: boolean = true;
      

    activeRoom(id:number){
      this.roomService.activeRoom(id).subscribe();
      this.activeRoomBtn=false;
      this.dactiveRoomBtn=true;
    }

    dactiveRoom(id:number){
      this.roomService.dactiveRoom(id).subscribe();
      this.dactiveRoomBtn=false;
      this.activeRoomBtn=true;
    }
}
