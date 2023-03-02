import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../model/api.response';
import { RoomFacilities } from '../model/roomfacilities.model';
import { Roomtype } from '../model/roomtype.model';

@Injectable({
  providedIn: 'root'
})
export class RoomFacilitiesService {

  baseUrl:string = "http://localhost:8085/";

  constructor(private httpClient : HttpClient) { }
 
  getAllRoomFacilities(): Observable<RoomFacilities> {
    return this.httpClient.get<RoomFacilities>(this.baseUrl+"roomfacilities/all");
  }

  createRoomFacilities(roomfacilities: RoomFacilities): Observable<ApiResponse> {
    return this.httpClient.post<ApiResponse>(this.baseUrl + "roomfacilities/add", roomfacilities);
  }

  deleteRoomFacilities(id: number): Observable<ApiResponse> {
    return this.httpClient.delete<ApiResponse>(this.baseUrl+"roomfacilities/delete/"+id);
  }

  
  updateRoomFacilities(id: number, rfac: RoomFacilities): Observable<ApiResponse> {
    return this.httpClient.put<ApiResponse>(this.baseUrl+"roomfacilities/update/"+rfac.rfid+"/", rfac);
  }

  getRoomFacById(id: number): Observable<any> {
    return this.httpClient.get(this.baseUrl+"roomfacilities/"+id);
  }



}
