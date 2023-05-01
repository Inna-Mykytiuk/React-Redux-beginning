import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
// import { rootReducer } from './reducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { tasksReducer } from './tasksSlice';
import { filtersReducer } from './filtersSlice';
import { combineReducers } from 'redux';

const persistConfig = {
  key: 'root',
  storage,
  //Зберігають тільки потрібні дані винесені в блек ліст або вайт ліст
  // blacklist: ['navigation'],
  // whitelist: ['navigation'],
};

const rootReducer = combineReducers({
  tasks: tasksReducer,
  filters: filtersReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// const enhancer = devToolsEnhancer();
// export const store = createStore(rootReducer, enhancer);

export const store = createStore(persistedReducer, devToolsEnhancer());
export const persistor = persistStore(store);

// import { configureStore } from '@reduxjs/toolkit';
// import { tasksReducer } from './tasksSlice';
// import { filtersReducer } from './filtersSlice';

// import { persistReducer, persistStore } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const contactsConfig = {
//   key: 'tasks',
//   storage,
// };

// export const store = configureStore({
//   reducer: {
//     tasks: persistReducer(contactsConfig, tasksReducer),
//     filters: filtersReducer,
//   },
// });

// export const persistor = persistStore(store);
