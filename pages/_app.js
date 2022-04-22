import {useContext} from 'react';
import '../styles/globals.css'
import { MonstersContext } from '../lib/helpers';

function MyApp({ Component, pageProps }) {
  return (
  <MonstersContext.Provider value={useContext(MonstersContext)}>
    <Component {...pageProps} />
  </MonstersContext.Provider>
  )
}

export default MyApp
