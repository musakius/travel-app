import React from 'react';
import TranslatableText from '../../TranslatableText';
import '../css/owfont-regular.css';


const WeatherContainer = ({ data, country }) => {
    const { weather, main } = data;

    const img = `owf owf-${weather[0].id} owf-5x`;

    return (
        <div className="card-body">
            <h4 className="card-title">
            <TranslatableText
                dictionary={{
                    russian: country.capital.ru,
                    belarusian: country.capital.be,
                    english: country.capital.en
                }}
            />
            </h4>
            <i className={img}></i>
            <h2 className="card-text">
                {
                    `${main.temp.toFixed(0)}°C`
                }
            </h2>
            <p className="card-text">{weather[0].description}</p>           
        </div>
    );
}

export default WeatherContainer;
