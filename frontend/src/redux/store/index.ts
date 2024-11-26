import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../slices/apiSlice';
import cartSliceReducer from '../slices/cartSlice';

const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [apiSlice.reducerPath]: apiSlice.reducer,
    cart: cartSliceReducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

/* 
   Nel caso specifico di RTK Query, che fa parte della libreria Redux Toolkit, 
   il polling viene utilizzato per aggiornare automaticamente i dati nel tuo stato dell'applicazione. 
   Quando utilizzi RTK Query per fare richieste a un'API, puoi abilitare il polling per chiedere 
   ripetutamente nuovi dati a intervalli specificati.

   In sintesi, il polling in questo caso significa che la tua applicazione può monitorare automaticamente 
   i cambiamenti dei dati sul server inviando richieste a intervalli regolari, mantenendo così l'interfaccia 
   utente aggiornata con le informazioni più recenti.
*/
