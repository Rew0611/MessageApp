import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { UserProvider } from './context/userContext';
import { ChakraProvider } from '@chakra-ui/react';
import { ChatProvider } from './context/chatContext';
import {disableReactDevTools} from '@fvilers/disable-react-devtools'

if(process.env.NODE_ENV==='production')
disableReactDevTools()

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <UserProvider>
        <ChatProvider>
          <App />
        </ChatProvider>
      </UserProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
