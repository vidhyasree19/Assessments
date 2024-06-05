import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ title, description, image }) => {
  return (
    <div className="card">
      <p>{title}</p>
      <p>{description}</p>
       <img src={image} alt='img'/>
     
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
};

Card.defaultProps = {
  image: '',
};

export default Card;


