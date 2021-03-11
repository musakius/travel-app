import React, { useEffect, useState } from 'react';
import Select from '../../Select';
import TranslatableText from '../../TranslatableText';
import classes from './Rate.module.scss';
import config from './config.json';

const Rate = ({ currency }) => {
    
    let savedCurrency = "rub";
    if(localStorage.getItem('currency')) {
        savedCurrency = localStorage.getItem('currency');
    }
    const [selectedCurrency, setSelectedCurrency] = useState(savedCurrency);
    const [resultValue, setResultValue] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [result, setResult] = useState(null);
    
    const apiID = config.appid;
    const url = `https://v6.exchangerate-api.com/v6/${apiID}/latest/${currency}`;

    const options = [
        {"OptValue": "rub", "value": "RUB"},
        {"OptValue": "usd", "value": "USD"},
        {"OptValue": "eur", "value": "EUR"}
    ]

    useEffect(() => {
        if (localStorage.getItem('currency') === null) {
            localStorage.setItem('currency', 'rub');
            setSelectedCurrency('rub');
        } else {
            setSelectedCurrency(localStorage.getItem('currency'));
        }
    }, []);


    useEffect(() => {
        let didCancel = false;
        const fetchData = async () => {
            setErrorMessage(null);
            try{
                const response = await fetch(url);
                const data = await response.json();
                if(!didCancel){
                    if(!response.ok){
                        setErrorMessage(data.message.toUpperCase());
                        return;
                    }else{
                        const dataObj = data.conversion_rates;
                        const value = dataObj[selectedCurrency.toUpperCase()].toFixed(3);
                        setResult(dataObj);
                        setResultValue(value);
                        setIsLoaded(true);
                    }
                }
            } catch (e) {
                if(!didCancel) {
                    setErrorMessage(e.toString());
                }
            }
        }
        fetchData();
        return () => {
            didCancel = true;
        };
    }, [url]);

    const updateCurrency = (e) => {
        const target = e.target.value;
        localStorage.setItem("currency", target);
        setSelectedCurrency(target);
        setResultValue(result[target.toUpperCase()].toFixed(3));
    }

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
        <div className="card border-info mb-3">
            <h3 className="card-header">
                <TranslatableText
                dictionary={{
                    russian: `Курс валюты`,
                    belarusian: `Курс валюты`,
                    english: `Currancy rate`
                }}
                />
            </h3>
            <div className={`${classes['currency__form']} card-body` }>
                <input 
                    type="text" 
                    className="form-control" 
                    readOnly={true}
                    value={currency}
                />
                <Select func={updateCurrency} selected={selectedCurrency} options={options} />
            </div>
            <div className="card-body">
                <input type="text" className="form-control" id="resultValue" value={resultValue} readOnly={true} />
            </div>

        </div>
    );
}

export default Rate;
