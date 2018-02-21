import expect from 'expect';
import {createStore} from 'redux';
import rootReducer from '../reductores';
import initialState from '../reductores/initialState';


describe('Store', function() {
  it('Shouel handle creating clientes', function(){
    //arrange
    const store = createStore(rootReducer, initialState);
  });
});
