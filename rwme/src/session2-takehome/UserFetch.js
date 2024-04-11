import axios from 'axios';

const UserFetch = async (user)=>{
    try{
        //handles the automatic json data trasformation
        return await axios.get(` https://reqres.in/api/users/${user}`);
    }
    catch(error){
      console.error(error)
    }
}
export {UserFetch};