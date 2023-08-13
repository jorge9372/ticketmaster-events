import eventsJSON from '../data/events.json';
import { useEffect, useState } from 'react';

const useEventsData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => { 
        setTimeout(()=>{
            try {
                setData(eventsJSON);
                setLoading(false);
            } catch (error){
                setError(error);
            }
           
        },4000);
     },[])
       
    return {
        events: data?._embedded?.events || [],
        loading,
        error,
    };

};

export default useEventsData;
