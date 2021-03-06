import React from 'react';
import TranslatableText from '../../components/TranslatableText';
import classes from './Country.module.scss';

const Country = ({dataCountries, countryName}) => {
  const country = dataCountries.find((el) => el.name.en.toLowerCase() === countryName);

  return (
    <main className={`${classes['container-country']} main`}>
      <h1 className={classes.title}>
        <TranslatableText
          dictionary={{
            russian: country.name.ru,
            belarusian: country.name.be,
            english: country.name.en
          }}
        />
      </h1>
    </main>
  );
};

export default Country;
