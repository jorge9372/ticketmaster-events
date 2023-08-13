
import { useEffect, useState } from 'react';

const useEventsData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => { 
        const fetchEvents = async () => {
            try {
                const response = await fetch ("https://app.ticketmaster.com/discovery/v2/events.json?apikey=ljJ73pIW6j8W7sjiJM4giAvoYwjqhe1v&countryCode=MX");
                const data = await response.json();
                
                setData(data);
                setLoading(false);
            } catch (error) {
                setError(error);
            }
        };

        fetchEvents();
       
     },[])
       
    return {
        events: data?._embedded?.events || [],
        loading,
        error,
    };

};

export default useEventsData;
