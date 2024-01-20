import { useQuery } from "@tanstack/react-query";
import { getAllData } from "./Api";


const UseData =  () => {
    const {data , isLoading , isError , refetch} = useQuery({
        queryKey:["allData"],
        queryFn: getAllData, 
        refetchOnWindowFocus:false
});
    return{
        data , isError , isLoading, refetch
    }

}

export default UseData;