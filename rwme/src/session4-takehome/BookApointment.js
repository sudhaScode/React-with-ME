import axios from "axios";

import './BookApointment.css';
import React,{ useState} from "react";
import Form from "./Form";




function BookApointment(){
    
    const [booking, setBooking] = useState(false);
    const [cancel, setCancel] = useState(false);

    const onCancel=()=>{
        setBooking(false)
        setCancel(false);
    }
    const onPostReq =async (appointmentDeatils)=>{
        setBooking(true);
        try{
        const response = await axios.post("https://jsonplaceholder.typicode.com/posts", appointmentDeatils);
        console.log(response);
        if(response.status === 201||200){
        setCancel(true);
        }
        
        }
        catch(error){
            console.error("Apointment failed")
        }

    }

    
    return(

             <div className="container">
               {!cancel&& !booking && <div>
                    <h1>Book a session</h1>
                    <p>Fill in the form below to book a virtual session with your doctor</p>
               < Form onSubmitForm={onPostReq}/></div>}
           {booking && !cancel && <h3>Scheduling the appointment...</h3>}
           {cancel&& booking && <div>      
             <h1>Appointment booked Successfully</h1>
             <button onClick={onCancel}>Cancel Appointment</button>            
            </div>}
        </div>
           );
}
export default BookApointment;

