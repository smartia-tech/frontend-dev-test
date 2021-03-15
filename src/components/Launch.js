import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
	root: {
		maxWidth: 345,
	},
	media: {
		height: 140,
	},
});

const Launch = ({ launch }) => {
	const classes = useStyles();

	return (
		<Grid item xs={3}>
			<Card className={classes.root}>
				<CardActionArea>
					<CardMedia
						className={classes.media}
						image={launch.links.patch.small}
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2">
							{launch.name}
						</Typography>
						<Typography variant="body2" color="textSecondary" component="p">
							{launch.date_utc || launch.date_local}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		</Grid>
	);
};

export default Launch;
