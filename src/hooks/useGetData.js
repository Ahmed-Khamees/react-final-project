import { useEffect, useState } from "react";
import axios from 'axios';

const useGetData = (url) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    console.log(url);
    useEffect(() => {
        const getData = async () => {
            console.log("async func called");
            try{
                console.log("entered try block");
                const response = await axios.get(url)
                setData(response.data);
                setLoading(false);
            }catch (err){
                setLoading(false);
                setError(err.message);
            }
        }
        setLoading(true);
        getData();
    }, [url]);
    return {data: data, loading: loading, error: error};
}

export default useGetData;