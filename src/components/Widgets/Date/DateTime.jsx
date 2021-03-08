import React from 'react';
import TranslatableText from '../../TranslatableText';
import Clock from './Clock';
import DateContainer from './DateContainer';

const DateTime = () => {
    const currentDate = new Date();

    return (
        <div className="card border-info mb-3 weather">
            <h3 className="card-header">
                <TranslatableText
                dictionary={{
                    russian: 'Дата и время',
                    belarusian: "Дата і час",
                    english: 'Date and time'
                }}
                />
            </h3>
            <div className="card-body">
                <Clock date={ currentDate } />
                <DateContainer date={ currentDate } />
            </div>            
        </div>
    );
}

export default DateTime;
