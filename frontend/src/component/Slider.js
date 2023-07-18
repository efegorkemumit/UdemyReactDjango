import React from 'react';
import SimpleImageSlider from 'react-simple-image-slider';

const images = [
  { url: '/images/slider/slider1.jpg' },
  { url: '/images/slider/slider2.jpg' },
];

const Slider = () => {
  return (
    <div>
      <SimpleImageSlider
        width={896}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
};

export default Slider;
