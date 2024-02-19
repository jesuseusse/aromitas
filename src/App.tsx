import { ThemeProvider, createTheme } from '@mui/material';
import { green, purple } from '@mui/material/colors';
import { Home } from './pages/Home';

const theme = createTheme({
	palette: {
		primary: {
			main: purple[500]
		},
		secondary: {
			main: green[500]
		}
	},
	typography: {
		fontFamily: ['Protest Riot', 'sans-serif'].join(',')
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
