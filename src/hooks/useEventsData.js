import { useState } from 'react';

// Hook para hacer una llamada a la API y guardarlo en tu estado local

const useEventsData = () => {
    const [data, setData] = useState([]);
    const [Loading, setLoading] = useState(true);
    const [error, setError] = useState();

    const fetchEvents = async (params) => {
        try {
            const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${import.meta.env.VITE_TICKETMASTER_API_KEY}&countryCode=MX${params?.length ? params : ''}`);            
            const data = await response.json();
            

            setData(data);
            setLoading(false);
        } catch (error) {
            setError(error);
        }
    };

    return {
        events: data?._embedded?.events || [],
        page: data?.page || {},
        Loading,
        error,
        fetchEvents,
    };
};

export default useEventsData;