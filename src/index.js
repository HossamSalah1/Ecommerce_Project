import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '@fortawesome/fontawesome-free/css/all.min.css'
import UserContectProvider from './Context/userContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

let quClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <QueryClientProvider client={quClient}>
        <UserContectProvider>
            <App />
        </UserContectProvider>
    </QueryClientProvider>
);
