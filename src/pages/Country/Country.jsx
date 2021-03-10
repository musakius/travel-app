import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {setShowSearch} from '../../redux/actions';
import TranslatableText from '../../components/TranslatableText';
import classes from './Country.module.scss';
import {LanguageConsumer} from '../../context';
import Widgets from '../../components/Widgets/Widgets';
import Video from '../../components/Video/Video';
import Map from '../../components/Map/Map';

const Country = ({countries, countryName, setShowSearch}) => {
  useEffect(() => {
    setShowSearch(false);
  }, []);

  const country = countries.find((el) => el.name.en.toLowerCase() === countryName);

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
      <div className={classes.widget}>
        <LanguageConsumer>
          {({language}) => (
            <Widgets country={country} capital={country.capital.en} language={language} />
          )}
        </LanguageConsumer>
      </div>
      <div className={classes.video}>
        <Video video={country.video} />
      </div>
      <div>
        <Map coordinates={country.coordinates} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Country);
