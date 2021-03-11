import React, { useContext } from 'react';
import Weather from './Weather/Weather';
import DateTime from './Date/DateTime';
import Rate from './Rate/Rate';
import { LanguageContext } from '../../context';

/**Country widgets */

const Widgets = ({ country }) => {
    const capital = country.capital.en;
    const { language } = useContext( LanguageContext );

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
