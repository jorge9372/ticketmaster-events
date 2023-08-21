import { useState } from "react";
import { LIKED_EVENTS_STORAGE_KEY } from '../utils/constants'



const checkIsEventLiked = (eventId) => {
    const LikedEvents = JSON.parse(localStorage.getItem(LIKED_EVENTS_STORAGE_KEY)) || [];

    return LikedEvents.includes(eventId);
}

const useLikeEvents = (eventId) => {
    const [isEventLiked, setIsEventLiked] = useState(checkIsEventLiked(eventId));

    const toggleEventsLike = () => {
        const LikedEvents = JSON.parse(localStorage.getItem(LIKED_EVENTS_STORAGE_KEY)) || [];
        const eventIndex = LikedEvents.indexOf(eventId);

        if (eventIndex !== -1) {
            LikedEvents.splice(eventIndex, 1);
            setIsEventLiked(false);
        } else {
            LikedEvents.push(eventId);
            setIsEventLiked(true);
        }

        localStorage.setItem(LIKED_EVENTS_STORAGE_KEY, JSON.stringify(LikedEvents));
    }

    return {
        isEventLiked,
        toggleEventsLike,
    }
};

export default useLikeEvents;