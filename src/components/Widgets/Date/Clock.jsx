import React, { useState, useEffect } from 'react';

const Clock = ({ locale, timeZone }) => {
    const [time, setTime] = useState(new Date());
    
    const tick = () => {
        setTime(new Date());
    }

    useEffect(() => {
        const interval = setInterval(() => tick(), 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <h2 className="card-text">
          {time.toLocaleTimeString(locale, { timeZone })}
        </h2>
    );
}

export default Clock;
