import React from 'react';
import TranslatableText from '../../TranslatableText/TranslatableText';
import days from './JSON/days.json';
import months from './JSON/months.json';

const DateContainer = () => {
    const date = new Date();
    const current = date.getDate();
    const day = date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();

    return (
        <div>
            <h3 className="card-text">
            <TranslatableText
                dictionary={{
                    russian: days[day].ru,
                    belarusian: days[day].be,
                    english: days[day].en
                }}
            />
            </h3>
            <h5 className="card-text">
                { `${current} ` }
                <TranslatableText
                    dictionary={{
                        russian: months[month].ru,
                        belarusian: months[month].be,
                        english: months[month].en
                    }}
                />
                { `, ${year} ` }
            </h5>
        </div>
    );
}

export default DateContainer;
