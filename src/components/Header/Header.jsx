import React from 'react';
import {LanguageConsumer} from '../../context';
import {Link} from 'react-router-dom';

import classes from './Header.module.scss';

const Header = () => {
  return (
    <LanguageConsumer>
      {({updateLanguage}) => (
        <header className={classes.header}>
          <Link to="/" className={classes.logo}>
            Travel app
          </Link>
          <select onChange={updateLanguage}>
            <option value="russian">russian</option>
            <option value="belarusian">belarusian</option>
            <option value="english">english</option>
          </select>
        </header>
      )}
    </LanguageConsumer>
  );
};

export default Header;
