import axios from "axios";

const api = axios.create({
    baseURL:'http://localhost:3000/'
})




export const getAllData = async() =>{
    try{
    const response = await api.get('V1/student/Alldata',{
       timeout :10*1000
    });
    console.log(response)
    return response.data
    } catch(err){
        console.log('link to backend is broken error')
    }

    
    
}