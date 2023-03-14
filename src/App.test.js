import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

//mocha is present in this package json its not running react testing library test cases 

describe("App",()=>{
    beforeEach(() => {
        render(
          <Provider store={store}>
            <App />
          </Provider>
        );
      });



})