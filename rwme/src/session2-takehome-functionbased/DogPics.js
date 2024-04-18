import React, { useEffect, useState}  from "react";
import fetchDogs from "./Utills";
import Dog from "./Dog";
import styles from './DogPics.module.css'



function DogPics() {
  
   const [breed, setBreed] = useState("random");
   const [image, setImage] = useState("");

   const onHandler = (event)=>{
    const breed = event.target.value;
     setBreed(breed);
   }
   const onClickHandler=()=>{
    console.log("clicked")
    fetchAPI(breed);
   }

   const fetchAPI = async(breed)=>{
   // console.log(breed, "DEBUG")
    let URL = "https://dog.ceo/api/breeds/image/random"
    
    if(breed !== "random"){
        URL = `https://dog.ceo/api/breed/${breed}/images/random`
    }
    try{
    const response = await fetchDogs(URL);
    const data = response.data
    if(response.status === 200){
        //console.log(data.message, "message DEBUG")
        setImage(data.message);
    }
    else{
        console.error("API Failure")
    }        
    }catch(error){
        console.log(error);
    }
}
  useEffect(()=>{
    fetchAPI(breed);
  },[breed])
  return (
    <div className={styles['dog-pics']}>
        <div className={styles.dropdown}>
            <label htmlFor="dog-breed">Select a breed:</label>
            <select id = "dog-breed" name="dog-breed" onChange={onHandler}>
                <option value="random" >Random</option>
                <option value="beagle">Beagle</option>
                <option  value="boxer">Boxer</option>
                <option value="dalmatian">Dalmatian</option>
                <option value="husky">Husky</option>
            </select>
        </div>
        <Dog name={breed} image = {image}/>
        <button onClick={onClickHandler}>Next</button>
    </div>
  ); 
}

export default DogPics;