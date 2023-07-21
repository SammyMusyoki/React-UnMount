import React from 'react';
import PropTypes from 'prop-types';

const UserProfile = ({ name, age, favouriteColors = [], isAvailable }) => {
  return (
    <div>
      <p>My name is {name}!</p>
      <p>My age is {age}!</p>
      <p>My favourite colors are {favouriteColors.join(', ')}!</p>
      <p> I am {isAvailable ? 'available' : 'not available'}</p>
    </div>
  );
};

export default UserProfile;

UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  favouriteColors: PropTypes.arrayOf(PropTypes.string).isRequired,
  isAvailable: PropTypes.bool.isRequired,
};
