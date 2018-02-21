import React from 'react';
import PropTypes from 'prop-types';

const TituloCabecera = ({titulo}) => {
  return (
    <div>
      <div className="row">
        <h2>{titulo}</h2>
      </div>
    </div>
  );
};

TituloCabecera.propTypes = {
  titulo: PropTypes.string.isRequired
};


export default TituloCabecera;
