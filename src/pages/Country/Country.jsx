import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {setShowSearch} from '../../redux/actions';
import TranslatableText from '../../components/TranslatableText';
import classes from './Country.module.scss';
import Widgets from '../../components/Widgets/Widgets';
import Video from '../../components/Video/Video';
import Map from '../../components/Map/Map';
import Gallery from '../../components/Gallery';

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
        <Widgets country={country} />
      </div>
      <div className={classes.video}>
        <Video video={country.video} />
      </div>
      <div className={classes.map}>
        <Map coordinates={country.coordinates} />
      </div>
      <Gallery gallery={country.gallery} />
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
