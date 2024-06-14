import React from 'react'
import ReactDOM from 'react-dom/client'
import "./assets/sass/main.scss";
import { Provider } from 'react-redux';
import { store } from './Redux/indexStore';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const client = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
)
