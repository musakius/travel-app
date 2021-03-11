import React from 'react';
import Weather from './Weather/Weather';
import DateTime from './Date/DateTime';
import Rate from './Rate/Rate';

/**Country widgets */

const Widgets = ({ country, language }) => {
    const capital = country.capital.en;

    return (
        <div className="card mb-3">
            <div className="card-body">
                <Weather country={ country } capital={ capital } language={ language } />
                <DateTime country={ country } language={ language } />
                <Rate currency={country.currency} />
            </div>
        </div>
    );
}

export default Widgets;
