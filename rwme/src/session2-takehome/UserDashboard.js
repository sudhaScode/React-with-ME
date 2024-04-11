import React from "react";
import Profile from "./Profile";
import styles from './UserDashboard.module.css';
import { UserFetch } from "./UserFetch";


class UserDashboard extends React.Component{
    constructor(){
        super();
        this.state = {
            user:{
            }
        }
    }
    handleClick = async(event)=>{
        let response;
        try{
            response = await UserFetch(event.target.name)
          }
          catch(error){
           console.log(error)
          }
         
          if(!response){
            alert("Failed to fetch data")
          }
          else{
           const {first_name,last_name, email, avatar} = response.data.data;
           const name = `${first_name} ${last_name}`
           this.setState((state)=>{
            return{
             user:{
             name: name,
             email : email,
             image : avatar
             }
           }});
           }
    }

    render(){
        return(
            <div>
               <div className={styles['button-event']}>
                <button onClick={this.handleClick} name="1">1</button>
                <button onClick={this.handleClick} name="2">2</button>
                <button onClick={this.handleClick} name="3">3</button>
                <button onClick={this.handleClick} name="100">100</button> 
               </div>
               <Profile name= {this.state.user.name} email= {this.state.user.email} image= {this.state.user.image}/>
            </div>
               
        );
    }
}
export default UserDashboard;