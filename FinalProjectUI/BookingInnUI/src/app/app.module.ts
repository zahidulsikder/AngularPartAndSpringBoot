import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserIndexComponent } from './user/user-index/user-index.component';
import { HeaderComponent } from './header/header.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './management/user/user.component';
import { HfListComponent } from './management/hotel-facilities/hf-list/hf-list.component';
import { HfCreateComponent } from './management/hotel-facilities/hf-create/hf-create.component';
import { HfUpdateComponent } from './management/hotel-facilities/hf-update/hf-update.component';
import { SideberComponent } from './sideber/sideber.component';
import { RoomCreateComponent } from './management/room/room-create/room-create.component';
import { RoomListComponent } from './management/room/room-list/room-list.component';
import { RoomUpdateComponent } from './management/room/room-update/room-update.component';
import { BookingListComponent } from './management/booking/booking-list/booking-list.component';
import { RoomTypeListComponent } from './management/room-type/room-type-list/room-type-list.component';
import { RoomTypeCreateComponent } from './management/room-type/room-type-create/room-type-create.component';
import { RoomTypeUpdateComponent } from './management/room-type/room-type-update/room-type-update.component';
import { RoomFacilitiesListComponent } from './management/room-facilities/room-facilities-list/room-facilities-list.component';
import { RoomFacilitiesCreateComponent } from './management/room-facilities/room-facilities-create/room-facilities-create.component';
import { RoomFacilitiesUpdateComponent } from './management/room-facilities/room-facilities-update/room-facilities-update.component';
import { LocationUpdateComponent } from './management/location/location-update/location-update.component';
import { LocationListComponent } from './management/location/location-list/location-list.component';
import { LocationCreateComponent } from './management/location/location-create/location-create.component';
import { HotelCreateComponent } from './management/hotel/hotel-create/hotel-create.component';
import { HotelListComponent } from './management/hotel/hotel-list/hotel-list.component';
import { HotelUpdateComponent } from './management/hotel/hotel-update/hotel-update.component';
import { PrintComponent } from './management/print/print.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UserIndexComponent,
    AdminDashboardComponent,
    LoginComponent,
    UserComponent,
    HfListComponent,
    HfCreateComponent,
    HfUpdateComponent,
    SideberComponent,
    RoomCreateComponent,
    RoomListComponent,
    RoomUpdateComponent,
    BookingListComponent,
    RoomTypeListComponent,
    RoomTypeCreateComponent,
    RoomTypeUpdateComponent,
    RoomFacilitiesListComponent,
    RoomFacilitiesCreateComponent,
    RoomFacilitiesUpdateComponent,
    LocationUpdateComponent,
    LocationListComponent,
    LocationCreateComponent,
    HotelCreateComponent,
    HotelListComponent,
    HotelUpdateComponent,
    PrintComponent

    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
