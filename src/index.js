import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './init';
import store from './store';
import AppRoutes from './routes';
import './assets/scss/main.scss';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

console.log('working in index', AppRoutes)
ReactDOM.render(
 <Provider store={store}>
 	<MuiThemeProvider>
  		<AppRoutes/>
  	</MuiThemeProvider>
  </Provider>,
 document.getElementById("app")
)
