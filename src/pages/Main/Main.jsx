import React, {useEffect} from 'react';
import TranslatableText from '../../components/TranslatableText';
import {connect} from 'react-redux';
import {setShowSearch} from '../../redux/actions';
import {Link} from 'react-router-dom';

import classes from './Main.module.scss';

const Main = ({countries, setShowSearch}) => {
  useEffect(() => {
    setShowSearch(true);
  }, []);

  const renderListCountries = (list) => {
    return list.map((el) => {
      return (
        <li className={classes['card']} key={el.id}>
          <Link className={classes['card-content']} to={`/${el.name.en.toLowerCase()}`}>
            <TranslatableText
              dictionary={{
                russian: el.name.ru,
                belarusian: el.name.be,
                english: el.name.en
              }}
            />
          </Link>
        </li>
      );
    });
  };

  return (
    <main className={`${classes['container-main']} main`}>
      <h1 className={classes.title}>
        <TranslatableText
          dictionary={{
            russian: 'Главная',
            belarusian: 'Галоўная',
            english: 'Main'
          }}
        />
      </h1>
      <ul className={classes['list-countries']}>{renderListCountries(countries)}</ul>
    </main>
  );
};

const mapStateToProps = ({countries}) => {
  return {countries};
};

const mapDispatchToProps = {
  setShowSearch
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
