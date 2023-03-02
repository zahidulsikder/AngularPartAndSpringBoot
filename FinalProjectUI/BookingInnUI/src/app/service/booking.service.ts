import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../model/api.response';
import { Booking } from '../model/booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  baseUrl: string = "http://localhost:8085/";

  constructor(private httpClient: HttpClient) { }

  public createbooking(booking: any) {
    return this.httpClient.post(`${this.baseUrl}booksave`, booking);
  }

  getAllBooking(): Observable<Booking> {
    return this.httpClient.get<Booking>(this.baseUrl+"booking/all");
  }

  getMaxBookingId(): Observable<number> {
    return this.httpClient.get<number>(this.baseUrl+"booking/maxid");
  }

  updateBooking(id: number, b: Booking): Observable<ApiResponse> {
    return this.httpClient.put<ApiResponse>(this.baseUrl+"booking/update/"+id+"/", b);
  }

  getBookingDetailsByEmail(email: number): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl + "booking/"+email);
  }

  

  getDataByBookingId(id: number): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl+"bookdata/"+id);
  }



}
