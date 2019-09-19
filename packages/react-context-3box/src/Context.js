import box from '3box/dist/3box';
import { createContext } from 'react';

const address = window.ethereum.selectedAddress

const Context = createContext({});

export default Context;
