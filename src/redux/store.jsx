import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { rootReducer } from './reducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  //Зберігають тільки потрібні дані винесені в блек ліст або вайт ліст
  // blacklist: ['navigation'],
  // whitelist: ['navigation'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// const enhancer = devToolsEnhancer();
// export const store = createStore(rootReducer, enhancer);

export const store = createStore(persistedReducer, devToolsEnhancer());
export const persistor = persistStore(store);
