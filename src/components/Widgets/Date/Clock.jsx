import React, { useState, useEffect } from 'react';

const Clock = () => {
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
          {time.toLocaleTimeString()}
        </h2>
    );
}

export default Clock;
