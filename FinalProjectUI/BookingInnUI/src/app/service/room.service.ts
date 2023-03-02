import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Room } from '../model/room.model';
import { Observable } from 'rxjs';
import { ApiResponse } from '../model/api.response';
import { Roomtype } from '../model/roomtype.model';
import { RoomFacilities } from '../model/roomfacilities.model';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  baseUrl:string = "http://localhost:8085/";

  constructor(private httpClient : HttpClient) { }

  createRoom(r: Room): Observable<ApiResponse> {
    return this.httpClient.post<ApiResponse>(this.baseUrl + "room/add", r);
  }

  uploadImg(file: File){
    const formData: FormData = new FormData();
    formData.append('file', file);
    return this.httpClient.post(this.baseUrl+"uploadImg", formData);
  }

  getImagesByName(imageNmae:string){
    return this.httpClient.get(this.baseUrl+"get_img_by_name/"+imageNmae);
  }

  getAllImg(){
    return this.httpClient.get<any[]>(this.baseUrl+"get_img");
  }

  getAllRoom(): Observable<Room[]> {
    return this.httpClient.get<Room[]>(this.baseUrl+"room/all");
  }

  updateRoom(id: number, room: Room): Observable<ApiResponse> {
    return this.httpClient.put<ApiResponse>(this.baseUrl+"room/update/"+room.rid+"/", room);
  }

  deleteRoom(id: number): Observable<ApiResponse> {
    return this.httpClient.delete<ApiResponse>(this.baseUrl+"room/delete/"+id);
  }

  getRoomById(rid:number): Observable<any>{
    return this.httpClient.get<any>(this.baseUrl+"room/"+rid);
  }

  getAllRoomByHotelId(hid:number): Observable<any>{
    return this.httpClient.get<any>(this.baseUrl+"roombyhotelid/"+hid);
  }
  
  //Make room deactive
  dactiveRoom(id: number) {
    console.log(id);
    return this.httpClient.patch(this.baseUrl+"room/dactive/"+id, id);
  }

  //Make room active
  activeRoom(id: number) {    
    console.log(id);
    return this.httpClient.patch(this.baseUrl+"room/active/"+id, id);
  }


}
