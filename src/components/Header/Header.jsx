import React, {useState} from 'react';
import {LanguageConsumer} from '../../context';
import {Link} from 'react-router-dom';

import classes from './Header.module.scss';

const Header = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <LanguageConsumer>
      {({updateLanguage}) => (
        <header className={`${classes.header} bg-primary`}>
          <nav className={`${classes.nav} navbar navbar-expand-lg navbar-dark center`}>
            <Link to="/" className="navbar-brand">
              Travel app
            </Link>
            <div className={`${classes.collapse} collapse navbar-collapse`}>
              <div className="form-inline my-2 my-lg-0">
                <input
                  className="form-control mr-sm-2"
                  type="text"
                  autoFocus={true}
                  autoComplete="off"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder="Search"
                />
                <button className="btn btn-secondary my-2 my-sm-0" type="button">
                  Search
                </button>
              </div>
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
