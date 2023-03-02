import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../model/api.response';
import { Location } from '../model/location.model';
import { Roomtype } from '../model/roomtype.model';

@Injectable({
  providedIn: 'root'
})
export class RoomTypeService {

  baseUrl:string = "http://localhost:8085/";

  constructor(private httpClient : HttpClient) { }

  getAllRoomType(): Observable<Roomtype> {
    return this.httpClient.get<Roomtype>(this.baseUrl+"roomtype/all");
  }

  createRoomType(roomtype: Roomtype): Observable<ApiResponse> {
    return this.httpClient.post<ApiResponse>(this.baseUrl + "roomtype/add", roomtype);
  }


  deleteRoomtype(id: number): Observable<ApiResponse> {
    return this.httpClient.delete<ApiResponse>(this.baseUrl+"roomtype/delete/"+id);
  }


  updateRoomtype(id: number, rt: Roomtype): Observable<ApiResponse> {
    return this.httpClient.put<ApiResponse>(this.baseUrl+"roomtype/update/"+rt.rtid+"/", rt);
  }

  getRoomtypeById(id: number): Observable<any> {
    return this.httpClient.get(this.baseUrl+"roomtype/"+id);
  }





}
