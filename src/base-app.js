import React from 'react';
import { Provider } from 'react-redux';
import { store, history } from './store';
import PublicRoutes from './router';
import { ThemeProvider } from 'styled-components';
import themes from './settings/themes';

import { themeConfig } from './settings';
import BaseAppHolder from './base-app-style';


const BaseApp = () => (
			<ThemeProvider theme={themes[themeConfig.theme]}>
				<BaseAppHolder>
					<Provider store={store}>
							<PublicRoutes history={history} />
					</Provider>
				</BaseAppHolder>
			</ThemeProvider>
);

export default BaseApp;

