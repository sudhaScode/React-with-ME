import styles from './UserDashboard.module.css'
function Profile(props){

    return(
        <div className={styles.profile}>
        <ul>
            <li>Name: {props.name}</li>
            <li>Email: {props.email}</li>
        </ul>
       
       <div className={styles['profile-img']}>
        <img src ={props.image} alt="User"/>
       </div>
       </div>
    );

}

export default Profile;