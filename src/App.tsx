import { ThemeProvider, createTheme } from '@mui/material';
import { green } from '@mui/material/colors';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { Provider } from 'react-redux';
import { store } from './store';

const theme = createTheme({
	palette: {
		primary: {
			main: '#000000'
		},
		secondary: {
			main: green[500]
		}
	},
	typography: {
		fontFamily: ['Caveat', 'sans-serif'].join(','),
		body1: {
			fontWeight: 500
		},
		subtitle1: {
			fontWeight: 700,
			fontSize: 20
		},
		subtitle2: {
			fontWeight: 500,
			fontSize: 18
		}
	}
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Provider store={store}>
				<RouterProvider router={router} />
			</Provider>
		</ThemeProvider>
	);
}

export default App;
