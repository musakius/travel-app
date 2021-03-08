import React from 'react';
import Weather from './Weather/Weather';

/**Country widgets */

const Widgets = ({ country, capital, language }) => {
    return (
        <div>
            <Weather country={ country } capital={ capital } language={ language } />
            
        </div>
    );
}

export default Widgets;
