import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from '../model/api.response';
import { Inventory } from '../model/inventory.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  baseUrl: string = "http://localhost:8085/";

  constructor(private httpClient: HttpClient) { }

  createInventory(inventory: Inventory): Observable<ApiResponse> {
    return this.httpClient.post<ApiResponse>(this.baseUrl + "inventory/add", inventory);
  }

  getAllInventory(): Observable<Inventory> {
    return this.httpClient.get<Inventory>(this.baseUrl + "inventory/all");
  }

  deleteInventory(id: number): Observable<ApiResponse> {
    return this.httpClient.delete<ApiResponse>(this.baseUrl + "inventory/delete/" + id);
  }

  updateInventory(id: number, Inventory: Inventory): Observable<ApiResponse> {
    return this.httpClient.put<ApiResponse>(this.baseUrl + "inventory/update/" + Inventory.iid + "/", Inventory);
  }

  getInventoryById(id: number): Observable<any> {
    return this.httpClient.get(this.baseUrl + id);
  }
}
