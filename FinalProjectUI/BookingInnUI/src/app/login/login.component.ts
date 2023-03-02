import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from '../model/booking.model';
import { User } from '../model/user.model';
import { BookingService } from '../service/booking.service';
import { UserService } from '../service/userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  constructor(private userservice : UserService,
              private bookingService : BookingService,
              private router: Router
              ){

  }

  

  registerCard: boolean = false;
  loginCard: boolean = true;

  showRegister() {
    this.loginCard = false;
    this.registerCard = true;
    
  }

  showLogin() {
    this.loginCard = true;
    this.registerCard = false;
  }


  public user : User = new User();

  public alluser!:any;
  getAllUser(){
    this.alluser = this.userservice.getAllUser();
    
  }
  ngOnInit(){
  }

  b : Booking = new Booking();
  maxid:number;
  login(){   
     this.bookingService.getMaxBookingId().subscribe(
      (value) => {
        console.log(value);
      this.maxid=value;   

      this.bookingService.updateBooking(this.maxid, this.b).subscribe(
        data => alert('book room successfully!!'),
         error => alert('Something is wrong, please try again!!'));
          this.router.navigate(['']);
      },
      (error: any) => {  
      }
    );
  }

 
  formSubmit(){
  
    console.log(this.user);
    
    if(this.user.firstname == '' || this.user.email == null){
      alert('user name is required');
      return;
    } else{
     
      this.userservice.createuser(this.user).subscribe(
        (data)=>{
          console.log(data);
          alert('data submitted successfully');
          this.clear();
        }, (error)=>{
          console.log(error);
          alert('not submitted');
          
        } 

      )
    }

  }

  clear(){
    this.user.firstname='';
    this.user.lastname='';
    this.user.cell='';
    this.user.email='';
    this.user.password='';

  }





}
