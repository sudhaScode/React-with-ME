import React,{useEffect, useState} from "react";
import './BookApointment.css'

function Form(props){
    const [isSelectedDoctor, setIsSelectedDoctor] = useState(false)
    const [validator, setValidator] = useState(0);
    const onDoctorSelected=(event)=>{
        //console.log(event.target.value)
        if(event.target.value !== "none"){
            setIsSelectedDoctor(true);

        }
        if(event.target.value === "none"){
            setIsSelectedDoctor(false);
            setValidator((prevSate)=>{return prevSate-1})
        }
        
        setValidator((prevSate)=>{return prevSate+1})

    }
    const isValidate=()=>{
        setValidator((prevSate)=>{return prevSate+1})
       //const form = document.getElementById("apointmentForm");
       
    }
    const onSubmitForm =async (event)=>{
       // console.log(event.target.selectDoctor.value)
        event.preventDefault();
       
        const appointmentDeatils = {
            "userId": 1000,
            "id": 1000,
            "title": `Patient apointement with ${event.target.selectDoctor.value} `,
            "body": `${event.target.firstname.value} ${event.target.lastname.value} is booked a apointement with ${event.target.selectDoctor.value} on ${event.target.date.value} `
        }
        props.onSubmitForm(appointmentDeatils);

    }
    useEffect(()=>{
   
        if(validator>=6){
            const submitButton = document.getElementById("submitButton");
            submitButton.disabled = false;
        }
        //console.log(validator)
    }, [validator])

    return(
        <div className="book-container">
        <form onSubmit={onSubmitForm} method="POST" id="apointmentForm">
        <div className="basic-info">
            <p>Basic Info</p>
            <label htmlFor="firstName">First Name<input id="firstName" name="firstname" required onMouseUp={isValidate}/></label>
            
            <label htmlFor="lastName">Last Name<input id="lastName" name="lastname" required onMouseUp={isValidate}/></label>
            
            <label htmlFor="email" >Email <input id="email"  required onMouseUp={isValidate}/></label>
           
        </div>
        <div className="doctor-container">
            <p>Doctor</p>
            <select  onChange={onDoctorSelected}  required id="selectDoctor">
                <option value= "none" >Select your doctor</option>
                <option value="Dr.Sudharshan">Dr. Sudharshan</option>
                <option value= "Dr.Peter Pan">Dr. Peter Pan</option>
                <option value ="Dr.Satya Ram">Dr. Satya Ram</option>
                <option value="Dr.John Cupor">Dr. John Cupor</option>
            </select>
            {isSelectedDoctor&&
            <div>
                <p>Where?</p>
               <div className="where-container">
               <label > <input type="radio" id="googleMeet" name="where"  required onMouseUp={isValidate}/>Google Meet</label>
               <label ><input type="radio" id="phone"  name="where"  required onMouseUp={isValidate}/>Phone</label>
               </div>
               <div className="when-container">
                <p>When?</p>
                <input type="date" name="date" className="date"  required onSelect={isValidate}/>
               </div>
            </div>
            }
        </div>
        <button type="submit" className="submit-button" id ="submitButton" disabled>Confirm Booking</button>
        </form>
    </div>

    );
}
export default Form;