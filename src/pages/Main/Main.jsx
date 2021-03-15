import React, {useEffect} from 'react';
import Card from '../../components/Card';
import {connect} from 'react-redux';
import {setShowSearch} from '../../redux/actions';

import classes from './Main.module.scss';

const Main = ({countries, setShowSearch}) => {
  useEffect(() => {
    setShowSearch(true);
  }, []);

  const renderListCountries = (list) => {
    return list.map((el) => {
      return <Card key={el.id} country={el} />;
    });
  };

  return (
    <main className={`${classes['container-main']} main`}>
      <div className="container-center">
        <ul className={classes['list-countries']}>{renderListCountries(countries)}</ul>
      </div>
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
