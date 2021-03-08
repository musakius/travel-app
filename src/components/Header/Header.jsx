import React from 'react';
import HeaderSearch from '../HeaderSearch';
import {LanguageConsumer} from '../../context';
import {Link} from 'react-router-dom';

import classes from './Header.module.scss';

const Header = () => {
  return (
    <LanguageConsumer>
      {({updateLanguage}) => (
        <header className={`${classes.header} bg-primary`}>
          <nav className={`${classes.nav} navbar navbar-expand-lg navbar-dark center`}>
            <Link to="/" className="navbar-brand">
              Travel app
            </Link>
            <div className={`${classes.collapse} collapse navbar-collapse`}>
              <HeaderSearch />
              <select className={`${classes.select} form-control ml-5`} onChange={updateLanguage}>
                <option value="russian">Rus</option>
                <option value="belarusian">Bel</option>
                <option value="english">Eng</option>
              </select>
            </div>
          </nav>
        </header>
      )}
    </LanguageConsumer>
  );
};

export default Header;
