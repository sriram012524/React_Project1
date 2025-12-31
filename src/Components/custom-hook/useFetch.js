import { useEffect, useState } from "react";
import axios from "axios"

function useFetch(url){
 let [product,setproduct] = useState([]);
    let [error,setError] = useState( "" );
    let[isLoading,setisLoading] = useState( true );

    useEffect(()=>{
        let fetchApi =  async()=>{
            try{
            // let response = await fetch(url)
            let response = await axios.get(url);
            setproduct(response.data);
            }
            catch(error){
                setError(error.message);
            }
            finally{
                setisLoading(false)
            }
        };
        fetchApi();
    },[]);

    return{product, error , isLoading, setproduct }

}
export default useFetch