import React, {useState, useEffect} from 'react';
import {LanguageConsumer} from '../../context';
import {connect} from 'react-redux';
import {filterCountries} from '../../redux/actions';
import classes from './HeaderSearch.module.scss';

const HeaderSearch = ({filterCountries}) => {
  const [dataSearch, setDataSearch] = useState({value: '', language: ''});

  useEffect(() => {
    filterCountries(dataSearch);
  }, [dataSearch]);

  return (
    <LanguageConsumer>
      {({language}) => (
        <div className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="text"
            autoFocus={true}
            autoComplete="off"
            value={dataSearch.value}
            onChange={(e) => setDataSearch({value: e.target.value, language})}
            placeholder="Search"
          />
          <button className="btn btn-secondary my-2 my-sm-0" type="button">
            Search
          </button>
        </div>
      )}
    </LanguageConsumer>
  );
};

const mapStateToProps = ({countries}) => {
  return {countries};
};

const mapDispatchToProps = {
  filterCountries
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderSearch);
