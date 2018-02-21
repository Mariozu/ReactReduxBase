import React from 'react';
import PropTypes from 'prop-types';

const HeaderClass = ({titulo}) => {
  return (
    <div>
      <div className="row">
        <h2>{titulo.mensaje}</h2>
      </div>
    </div>
  );
};

HeaderClass.propTypes = {
  titulo: PropTypes.object.isRequired
};


export default HeaderClass;
