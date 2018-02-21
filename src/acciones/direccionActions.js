import axios from 'axios';
import * as types from './actionTypes';
import toastr from 'toastr';
import _ from 'lodash';
import * as initial from '../reductores/initialValues';

export function saveDireccionCliente(direccion) {

  return {
    type: types.DIRECCION_CLIENTE,
    direccion
  };
}
