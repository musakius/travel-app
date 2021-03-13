import React from 'react';
import Weather from './Weather/Weather';
import DateTime from './Date/DateTime';
import Rate from './Rate/Rate';
import { LanguageConsumer } from '../../context';

/**Country widgets */

const Widgets = ({ country }) => {
    const capital = country.capital.en;

    return (
        <LanguageConsumer>
        {({language}) => (
            <div className="card mb-3">
                <div className="card-body">
                    <Weather country={ country } capital={ capital } language={ language } />
                    <DateTime country={ country } language={ language } />
                    <Rate currency={country.currency} />
                </div>
            </div>
        )}
      </LanguageConsumer>
    );
}

export default Widgets;
