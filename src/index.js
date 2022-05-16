import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';
import { BrowserRouter as Router } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { DarkModeProvider } from 'context/DarkModeProvider';
import { darkTheme, lightTheme } from 'theme';
import App from 'App';
import 'index.css';
import 'antd/dist/antd.css'

const client = new ApolloClient({
  uri: process.env.REACT_APP_URL,
  cache: new InMemoryCache()
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <DarkModeProvider>
        <Router>
          <App />
        </Router>
      </DarkModeProvider>
    </ApolloProvider>
  </React.StrictMode>
);
