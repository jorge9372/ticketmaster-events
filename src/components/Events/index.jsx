import { useNavigate } from "react-router-dom";

import useEventsData from "../../hooks/useEventsData";
import EventItem from "./components/Eventitem";





const Events = ({ searchTerm }) => {

    const { events, loading, error } = useEventsData();
    const navigate = useNavigate();

    const handleEventEventClick = (id) => {
        navigate(`/detail/${id}`);
    }
    const renderEvents = () => {
        let eventsFiltered = events;

        if (searchTerm.length > 0) {
            eventsFiltered = eventsFiltered.filter((evt) => evt.name.toLocaleLowerCase().includes(searchTerm))
        }

        return eventsFiltered.map((eventItem) => (
            <EventItem
                key={`event-item-${eventItem.id}`}
                name={eventItem.name}
                info={eventItem.info}
                image={eventItem.images[0].url}
                onEventClick={handleEventEventClick}
                id={eventItem.id}
            />
        ));
    };

    if (error){
        return <div>Ha ocurrido un error</div>;       
    };

    if(loading) {
        return  <div>Cargando...</div>;             
    }

    return (
        <div>
            Eventos
            {renderEvents()}
        </div>
    );

};

export default Events;