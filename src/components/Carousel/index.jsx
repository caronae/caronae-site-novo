import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import './styles.css';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? items.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === items.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div>
      <div className="carousel-container">
        <button onClick={prevSlide} className="nav-button">
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <div className="carousel-item">
          <div className="carousel-content">
            <img
              src={items[currentIndex].image}
              alt={items[currentIndex].title}
              className="carousel-image"
            />
            <div className="carousel-description">
              <h2 className={`carousel-title ${currentIndex === 0 ? 'blue-title' : 'red-title'}`}>{items[currentIndex].title}</h2>
              <h3 className="carousel-subtitle">{items[currentIndex].subtitle}</h3>
              <p className="carousel-text">{items[currentIndex].description}</p>
            </div>
          </div>
        </div>
        <button onClick={nextSlide} className="nav-button">
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
      <div className="footer-container">
        <img
          src={items[currentIndex].footerImage}
          alt={`Footer for ${items[currentIndex].title}`}
          className="footer-image"
        />
      </div>
    </div>
  );
};

export default Carousel;