import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {

  RouterProvider,
} from "react-router-dom";
import { router } from './Router/Router';
import AuthProvider from './AuthProvider/AuthProvider';
import {
 
  QueryClient,
  QueryClientProvider,
} from 'react-query'

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <AuthProvider>
     <QueryClientProvider client={queryClient}>
     <RouterProvider router={router} />
     </QueryClientProvider>
     </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
