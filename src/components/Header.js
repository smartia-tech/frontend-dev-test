import { Typography } from '@material-ui/core';

const Header = () => {
	return (
		<Typography
			style={{
				padding: '30px 0 30px 0',
				textAlign: 'center',
			}}
			variant="h4"
			component="h2"
		>
			SpaceX Launches
		</Typography>
	);
};

export default Header;
