import axios from "axios"

const fetchDogs = async (URL)=>{
    return await axios.get(URL)
}

export default fetchDogs