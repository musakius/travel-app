import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {setShowSearch} from '../../redux/actions';
import TranslatableText from '../../components/TranslatableText';
import classes from './Country.module.scss';
import {LanguageConsumer} from '../../context';
import Widgets from '../../components/Widgets/Widgets';
import Video from '../../components/Video/Video';
import Map from '../../components/Map/Map';
import Gallery from '../../components/Gallery';

const Country = ({countries, countryName, setShowSearch}) => {
  useEffect(() => {
    setShowSearch(false);
    window.scrollTo({top: 50, behavior: 'smooth'});
  }, []);

  const country = countries.find((el) => el.name.en.toLowerCase() === countryName);

  return (
    <main className={`${classes['container-country']} main`}>
      <div className="center">
        <h1 className={classes.title}>
          <TranslatableText
            dictionary={{
              russian: country.name.ru,
              belarusian: country.name.be,
              english: country.name.en
            }}
          />
        </h1>
        <div className={classes.content}>
          <div className={classes.components}>
            <div className={classes.gallery}>
              <Gallery gallery={country.gallery} />
            </div>
            <div className={classes['video-and-map']}>
              <Video video={country.video} />
              <Map coordinates={country.coordinates} />
            </div>
          </div>
          <div className={classes.widget}>
            <LanguageConsumer>
              {({language}) => <Widgets country={country} language={language} />}
            </LanguageConsumer>
          </div>
        </div>
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
