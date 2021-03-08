import React from 'react';
import Weather from './Weather/Weather';
import DateTime from './Date/DateTime';

/**Country widgets */

const Widgets = ({ country, capital, language }) => {
    return (
        <div>
            <Weather country={ country } capital={ capital } language={ language } />
            <DateTime />
            
        </div>
    );
}

export default Widgets;
