import React from 'react';
import { useRoutes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { store } from './redux/store';

import './i18n';
import routes from './routes';

import { ThemeProvider } from './contexts/ThemeContext';
import { SidebarProvider } from './contexts/SidebarContext';
import { LayoutProvider } from './contexts/LayoutContext';

import { AuthProvider } from './contexts/JWTContext';
// import { AuthProvider } from "./contexts/FirebaseAuthContext";
// import { AuthProvider } from "./contexts/Auth0Context";
// import { AuthProvider } from "./contexts/CognitoContext";

const App = () => {
	const content = useRoutes(routes);

	return (
		<HelmetProvider>
			<Helmet />
			<Provider store={store}>
				<ThemeProvider>
					<SidebarProvider>
						<LayoutProvider>
							<AuthProvider>{content}</AuthProvider>
						</LayoutProvider>
					</SidebarProvider>
				</ThemeProvider>
			</Provider>
		</HelmetProvider>
	);
};

export default App;
