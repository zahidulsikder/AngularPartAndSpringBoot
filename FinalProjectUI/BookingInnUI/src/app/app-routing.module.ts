import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { LoginComponent } from './login/login.component';
import { BookingListComponent } from './management/booking/booking-list/booking-list.component';
import { HfCreateComponent } from './management/hotel-facilities/hf-create/hf-create.component';
import { HfListComponent } from './management/hotel-facilities/hf-list/hf-list.component';
import { HfUpdateComponent } from './management/hotel-facilities/hf-update/hf-update.component';
import { HotelCreateComponent } from './management/hotel/hotel-create/hotel-create.component';
import { HotelListComponent } from './management/hotel/hotel-list/hotel-list.component';
import { LocationCreateComponent } from './management/location/location-create/location-create.component';
import { LocationListComponent } from './management/location/location-list/location-list.component';
import { LocationUpdateComponent } from './management/location/location-update/location-update.component';
import { PrintComponent } from './management/print/print.component';
import { RoomFacilitiesCreateComponent } from './management/room-facilities/room-facilities-create/room-facilities-create.component';
import { RoomFacilitiesListComponent } from './management/room-facilities/room-facilities-list/room-facilities-list.component';
import { RoomFacilitiesUpdateComponent } from './management/room-facilities/room-facilities-update/room-facilities-update.component';
import { RoomTypeCreateComponent } from './management/room-type/room-type-create/room-type-create.component';
import { RoomTypeListComponent } from './management/room-type/room-type-list/room-type-list.component';
import { RoomTypeUpdateComponent } from './management/room-type/room-type-update/room-type-update.component';
import { RoomCreateComponent } from './management/room/room-create/room-create.component';
import { RoomListComponent } from './management/room/room-list/room-list.component';
import { RoomUpdateComponent } from './management/room/room-update/room-update.component';
import { UserIndexComponent } from './user/user-index/user-index.component';
const routes: Routes = [
{path:'', component:UserIndexComponent},
{path: 'admindash', component:AdminDashboardComponent},
{path:'login', component:LoginComponent},
{path:'addhotelfacilities', component:HfCreateComponent},
{path:'allhotelfacilities', component:HfListComponent},
{path:'updatefacilities', component:HfUpdateComponent},
{path:'updatefacilities/:id', component:HfUpdateComponent},
{path:'allhotel', component:HotelListComponent},
{path:'addhotel', component:HotelCreateComponent},
{path:'updatehotel/:id', component:HotelCreateComponent},
{path:'addroom', component:RoomCreateComponent},
{path:'allroom', component:RoomListComponent},
{path:'addroomfacilities', component:RoomFacilitiesCreateComponent},
{path:'allroomfacilities', component:RoomFacilitiesListComponent},
{path:'addroomtype', component:RoomTypeCreateComponent},
{path:'allroomtype', component:RoomTypeListComponent},
{path:'updateroom/:id', component:RoomUpdateComponent},
{path:'allbooking', component:BookingListComponent},
{path:'alllocation', component:LocationListComponent},
{path:'addlocation', component:LocationCreateComponent},
{path:'updatelocation/:id', component:LocationUpdateComponent},
{path:'updateroomtype/:id', component:RoomTypeUpdateComponent},
{path:'updateroomfacilities/:id', component:RoomFacilitiesUpdateComponent},
{path:'print',component:PrintComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
