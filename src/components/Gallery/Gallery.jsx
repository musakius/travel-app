import React, {useRef, useState, useEffect} from 'react';
import TranslatableText from '../TranslatableText/';
import ImageGallery from 'react-image-gallery';
import './image-gallery.scss';

import classes from './Gallery.module.scss';

const Gallery = ({gallery}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const galleryRef = useRef(null);

  return (
    <div className={`${classes.gallery} card mb-3`}>
      <h4 className="card-header">
        <TranslatableText
          dictionary={{
            russian: 'Галерея',
            belarusian: 'Галерэя',
            english: 'Gallery'
          }}
        />
      </h4>
      <ImageGallery
        items={gallery.images}
        showPlayButton={false}
        ref={galleryRef}
        onSlide={() => setCurrentIndex(galleryRef.current.getCurrentIndex())}
      />
      <div className="card-footer text-muted">
        <TranslatableText
          dictionary={{
            russian: gallery.descriptions.ru[currentIndex],
            belarusian: gallery.descriptions.be[currentIndex],
            english: gallery.descriptions.en[currentIndex]
          }}
        />
      </div>
    </div>
  );
};

export default Gallery;
