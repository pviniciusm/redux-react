import { createStore, combineReducers } from 'redux';
import persistStore from 'redux-persist/es/persistStore';
import { cartReducer } from './modules/cart/reducer';
import { persistedReducers } from './persistor';

const combinedReducers = combineReducers({
    cart: cartReducer,
});

export const store = createStore(
    persistedReducers(combinedReducers),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const persistor = persistStore(store);
