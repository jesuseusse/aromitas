import { ThemeProvider, createTheme } from '@mui/material';
import { green } from '@mui/material/colors';
import { Home } from './pages/Home';

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
		}
	}
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Home />
		</ThemeProvider>
	);
}

export default App;
