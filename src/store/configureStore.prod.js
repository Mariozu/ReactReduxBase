import {createStore, applyMiddleware, compose} from 'redux';
import promise                        from 'redux-promise';
import rootReducer                    from '../reductores';
import reduxImmutableStateInvariant   from 'redux-immutable-state-invariant';
import thunk                          from 'redux-thunk';
import {persistStore, autoRehydrate} from 'redux-persist';

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(promise, thunk),
    autoRehydrate()
  );
}
