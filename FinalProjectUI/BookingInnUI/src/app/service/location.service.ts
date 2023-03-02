import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../model/api.response';
import { Location } from '../model/location.model';



@Injectable({
  providedIn: 'root'
})
export class LocationService {

  baseUrl: string = "http://localhost:8085";
  constructor(private httpClient: HttpClient) { }

  public createlocation(location: any) {
    return this.httpClient.post(`${this.baseUrl}/location/add`, location);
  }

  getAllLocation(): Observable<Location> {
    return this.httpClient.get<Location>(this.baseUrl+"/location/all");
  }

  

  deleteLocationById(lid: number): Observable<ApiResponse> {
    return this.httpClient.delete<ApiResponse>(this.baseUrl+"/location/delete/"+lid);
  }

  updateLocation(lid: number, location: Location): Observable<ApiResponse> {
    return this.httpClient.put<ApiResponse>(this.baseUrl+"/location/update/"+location.lid +"/", location);
  }

  getLocationById(lid: number): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl+"/location/"+lid);
  }
  






}
