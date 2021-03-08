import React from 'react';
import TranslatableText from '../../TranslatableText';
import Clock from './Clock';
import DateContainer from './DateContainer';

const DateTime = ({ country, language }) => {

    const dateInfo = country.date;
    const timeZone = dateInfo.timeZone;
    const locale = `${language.substring(0,2)}-${dateInfo.code}`;

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
                <Clock locale={ locale } timeZone={timeZone} />
                <DateContainer />
            </div>            
        </div>
    );
}

export default DateTime;
