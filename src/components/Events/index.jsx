import { useNavigate } from "react-router-dom";


import EventItem from "./components/Eventitem";

const Events = ({ searchTerm, events }) => {

    
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

    

    return (
        <div>
            Eventos
            {renderEvents()}
        </div>
    );

};

export default Events;