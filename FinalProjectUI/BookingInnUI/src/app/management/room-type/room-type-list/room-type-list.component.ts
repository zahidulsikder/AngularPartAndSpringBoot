import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RoomTypeService } from 'src/app/service/room-type.service';

@Component({
  selector: 'app-room-type-list',
  templateUrl: './room-type-list.component.html',
  styleUrls: ['./room-type-list.component.css']
})
export class RoomTypeListComponent {


  roomtypeList?: any;

  constructor( 
    private roomtypeService : RoomTypeService,
    private router:Router
    ){}

    ngOnInit(){
      this.roomtypeList = this.roomtypeService.getAllRoomType();
      }


deleteRoomtype(id:number){
  this.roomtypeService.deleteRoomtype(id).subscribe(
    data=>{alert('Roomtype successfully deleted!!'); 
      this.ngOnInit(); 
    },
    error=>alert('Somethig wrong, please try again!!')      
    );  

}

  updateRoomtype(id:number){
    this.router.navigate(['updateroomtype/',id]);
  }


}
