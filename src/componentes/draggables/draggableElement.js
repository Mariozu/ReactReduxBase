import React from 'react';
import PropTypes from 'prop-types';
import {Button}    from 'react-bootstrap';

const DraggableButton = ({descripcion,dragStart,selectedElement}) => {
  return (
    <Button
      draggable="true"
      id={descripcion}
      type="button"
      onDragStart={dragStart}
      onClick={selectedElement}
      className="btn btn-info">{descripcion}</Button>
  );
};

DraggableButton.propTypes = {
  descripcion: PropTypes.string,
  dragStart:PropTypes.func,
  selectedElement:PropTypes.func
};


export default DraggableButton;
