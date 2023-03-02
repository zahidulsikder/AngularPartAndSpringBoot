import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hotel } from '../model/hotel.model';
import { Hotelfacilities } from '../model/hotelfacilities.model';
import { Location } from '../model/location.model';
import { ApiResponse } from '../model/api.response';
import { Room } from '../model/room.model';

@Injectable({
  providedIn: 'root'
})
export class HotelService {


  baseUrl: string = "http://localhost:8085/";


  constructor(private httpClient: HttpClient) { }


  getAllHotelByLocation(lid: number): Observable<Hotel> {
    return this.httpClient.get<Hotel>(this.baseUrl + "hotelbylocationid/" + lid);
  }

  getAllLocation(): Observable<Location> {
    return this.httpClient.get<Location>(this.baseUrl + "location/all");
  }

  getAllHotel(): Observable<Hotel> {
    return this.httpClient.get<Hotel>(this.baseUrl + "hotel/all");
  }

  getHotelById(hid: number): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl+"hotel/"+hid);
  }

  createFacilities(facilities: Hotelfacilities): Observable<ApiResponse> {
    return this.httpClient.post<ApiResponse>(this.baseUrl + "hotelfacilities/add", facilities);
  }

  getAllHotelFacilities(): Observable<Hotelfacilities> {
    return this.httpClient.get<Hotelfacilities>(this.baseUrl+"hotelfacilities/all");
  }

  deleteFacilities(id: number): Observable<ApiResponse> {
    return this.httpClient.delete<ApiResponse>(this.baseUrl+"hotelfacilities/delete/"+id);
  }

  updateHFacilities(id: number, hf: Hotelfacilities): Observable<ApiResponse> {
    return this.httpClient.put<ApiResponse>(this.baseUrl+"hotelfacilities/update/"+hf.hfacid+"/", hf);
  }

  getFacilitiesById(id: number): Observable<any> {
    return this.httpClient.get(this.baseUrl+"hotelfacilities/"+id);
  }


}
