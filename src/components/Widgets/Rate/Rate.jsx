import React, { useEffect, useState } from 'react';
import Select from '../../Select';
import TranslatableText from '../../TranslatableText';
import classes from './Rate.module.scss';
import config from './config.json';

const Rate = ({ currency }) => {
    const [selectedCurrency, setSelectedCurrency] = useState("rub");
    const [currencyValue, setCurrencyValue] = useState(1);
    const [resultValue, setResultValue] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [result, setResult] = useState(null);
    
    const apiID = config.appid;
    const baseUrl = `https://v6.exchangerate-api.com/v6/${apiID}/latest/`;
    const [url, setUrl] = useState(baseUrl);

    useEffect(() => {
        if (localStorage.getItem('currency') === null) {
            localStorage.setItem('currency', 'rub');
            setSelectedCurrency('rub');
        } else {
            setSelectedCurrency(localStorage.getItem('currency'));
        }
        console.log("selectedCurrency",selectedCurrency);
        setUrl(baseUrl + selectedCurrency);
    }, []);

    console.log(url);

    const options = [
        {"OptValue": "rub", "value": "RUB"},
        {"OptValue": "usd", "value": "USD"},
        {"OptValue": "eur", "value": "EUR"}
    ]

    useEffect(() => {
        console.log("url", url);
        let didCancel = false;
        const fetchData = async () => {
            try{
                const response = await fetch(url);
                const data = await response.json();
                if(!didCancel){
                    if(!response.ok){
                        setErrorMessage(data.message.toUpperCase());
                        return;
                    }else{
                        setIsLoaded(true);
                        setResult(data.conversion_rates);
                        if(result) {
                            setResultValue(result[currency]);
                            setErrorMessage(null);
                        }
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

    useEffect(() => {
        changeCurValue();
    }, [currencyValue]);


    const updateCurrency = (e) => {
        localStorage.setItem("currency", e.target.value);
        setSelectedCurrency(e.target.value);
        setUrl(baseUrl + selectedCurrency);
    }

    const changeCurValue = () => {
        if(!result) return;
        const newResult = (currencyValue > 1) ? currencyValue * resultValue : result[currency];
        setResultValue(newResult);
    }

    const handleChange = (e) => {
        setCurrencyValue(e.target.value);
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

    console.log("result", result);

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
                <form className={classes.currency__form}>
                    <input type="text" className="form-control" value={currencyValue} onChange={(e) => handleChange(e)} /> 
                    <input type="text" className="form-control" value={resultValue} readOnly={true} />
                </form>
            </div>

        </div>
    );
}

export default Rate;
