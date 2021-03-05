import React from 'react';

import classes from './Country.module.scss';

const Country = ({listCountries, countryName}) => {
  const country = listCountries.find((el) => el.name.toLowerCase() === countryName);

  return (
    <main className={`${classes['container-country']} main`}>
      <h1 className={classes.title}>{country.name}</h1>
    </main>
  );
};

export default Country;
