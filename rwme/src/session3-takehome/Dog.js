import React from "react";
import styles from './DogPics.module.css'

function Dog(props) {
    //console.log(props.image)
    
  return (
    <div className={styles.image}>
      <img src={props.image} alt={props.name} />
    </div>
  );
}

export default Dog;