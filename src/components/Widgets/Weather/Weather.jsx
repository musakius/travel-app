import React, { useState, useEffect } from 'react';
import WeatherContainer from './WeatherContainer';
import TranslatableText from '../../TranslatableText/TranslatableText';
import config from './config.json';
import classes from './Weather.module.scss';


const Weather = ({ country, capital, language }) => {

    const [errorMessage, setErrorMessage] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [result, setResult] = useState(null);

    const urlLanguage = language.substring(0,2);

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${config.appid}&units=metric&lang=${urlLanguage}`;

    async function fetchData(url) {
        try{
            const response = await fetch(url);
            const data = await response.json();
            if(!response.ok){
                setErrorMessage(data.message.toUpperCase());
                return;
            }else{
                setIsLoaded(true);
                setResult(data);
            }
        } catch (e) {
            setErrorMessage(e.toString());
        }
    }

    useEffect(() => {
        fetchData(url);
    }, [url]);

    if (errorMessage) {
        return <div>
            <TranslatableText
            dictionary={{
                russian: 'Ошибка',
                belarusian: 'Памылка',
                english: 'Error'
            }}
            />
            : {errorMessage}
        </div>
    } if (!isLoaded) {
        return <div>
            <TranslatableText
            dictionary={{
                russian: 'Загрузка',
                belarusian: 'Загрузка',
                english: 'Loading'
            }}
            />
            ...
        </div>
    }

    return (
        <div className="card border-info mb-3 weather">
            <h3 className="card-header mb-3">
                <TranslatableText
                dictionary={{
                    russian: 'Погода',
                    belarusian: "Надвор'е",
                    english: 'Weather'
                }}
                />
            </h3>
            <div className="card-body">
                    { result
                        ? <WeatherContainer data={ result } country={ country } />
                        : null
                    }
            </div>
        </div>
    );
}

export default Weather;
