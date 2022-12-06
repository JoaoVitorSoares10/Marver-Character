import { Header } from './components/Header';
import { Characters } from './components/characters';

import {useState} from 'react';

import { GlobalStyle } from "./styles/GlobalStyle";

export default function App() {
  const [isNoInternetConnection, setIsNoInternetConnection] = useState<boolean>(false);
  
  return (
    <>
      <GlobalStyle />
      {isNoInternetConnection && 
        <div className="alert">
          <p>No internet Conection</p>
        </div>
      }
      <Header />
      <Characters
        onNoInternetConection={setIsNoInternetConnection}
      />
    </>
  );
}

