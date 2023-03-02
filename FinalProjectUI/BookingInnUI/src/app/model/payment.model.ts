import{Booking} from './booking.model';
import{User} from './user.model';

export class Payment{

    pid:Number | undefined;
   
    pType: string | undefined;
    acDetails: string | undefined;
    pAmount: string | undefined;
    pDate: string | undefined;
   
    booking: Booking[] | undefined;
    user: User[] | undefined;


    


}