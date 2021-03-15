import { useEffect, useState } from 'react';
import axios from 'axios';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

// Components
import Header from './components/Header';
import { Grid, Container, LinearProgress, TextField } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';

import Launch from './components/Launch';

const theme = createMuiTheme({
	palette: {
		primary: {
			light: '#757ce8',
			main: '#3f50b5',
			dark: '#002884',
			contrastText: '#fff',
		},
		secondary: {
			light: '#ff7961',
			main: '#f44336',
			dark: '#ba000d',
			contrastText: '#000',
		},
	},
});

function App() {
	// States
	const [loading, setLoading] = useState(false);
	const [launches, setLaunches] = useState([]);
	const [count, setCount] = useState(0);

	// Functions
	const fetchLaunches = async (page, search) => {
		const query = search && { $text: { $search: search } };
		setLoading(true);
		try {
			const response = await axios.post(
				'https://api.spacexdata.com/v4/launches/query',
				{ options: { page }, query }
			);
			setCount(response.data.totalDocs);
			setLaunches(response.data.docs);
		} catch (error) {
			// throw error
		}
		setLoading(false);
	};

	const onChange = (event, page) => {
		fetchLaunches(page);
	};

	const onSearch = (event) => {
		console.log(event);
		setTimeout(() => {
			fetchLaunches(1, event.target.value);
		}, 1000);
	};

	useEffect(() => {
		fetchLaunches();
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<Container maxWidth="lg">
				<Header />

				<Grid justify="flex-end" container style={{ padding: '0 0 10px 0' }}>
					<Grid item xs={4}>
						<TextField label="Search" onChange={onSearch} fullWidth />
					</Grid>
				</Grid>

				{loading ? (
					<LinearProgress />
				) : (
					<>
						<Grid alignItems="center" container spacing={3}>
							{launches.map((launch, i) => (
								<Launch key={i} launch={launch} />
							))}
						</Grid>
						<Grid
							justify="center"
							container
							style={{ padding: '30px 0 30px 0' }}
						>
							<Pagination
								size="large"
								count={count}
								color="primary"
								onChange={onChange}
							/>
						</Grid>
					</>
				)}
			</Container>
		</ThemeProvider>
	);
}

export default App;
