import React from 'react'; 
import { Provider } from 'react-redux/es/exports';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home'; 
import store from './redux/store';
import { LayoutContainer } from './styled-components';

function App() {
  return (
    <Provider store={store}>
      <Navbar/>
      <LayoutContainer>
        <Home/>
      </LayoutContainer>
    </Provider>
  )
}

export default App;
