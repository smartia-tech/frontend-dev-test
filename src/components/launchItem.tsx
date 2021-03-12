import React from 'react'
import { Launch } from '../common/types'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const LaunchCard = ({ launch }: LaunchCardProps) => {
    const classes = useStyles();
    const landingSuccess = launch.cores?.length && launch.cores[0].landing_success ? "Yes" : "No"
    const landingSuccessColor = landingSuccess == "Yes" ? "primary" : "error"
    
    return (
        <Card className={classes.root}>
        <CardMedia
            className={classes.image}
            image={launch.links.patch.small}
            title={launch.name}
        />
        <CardContent>
            <Typography className={classes.typography} variant="h5" component="h2">
                {launch.name}
            </Typography>
            <Typography color="textSecondary" gutterBottom>
                {new Date(launch.date_utc).toLocaleDateString()}
            </Typography>
            <Typography color={landingSuccessColor} gutterBottom>
                Landed: {landingSuccess}
            </Typography>
        </CardContent>
    </Card>
    )
}

type LaunchCardProps = {
    launch: Launch
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '300px',
        margin: '5px',
    },
    typography: {
        overflow: "hidden", textOverflow: "ellipsis"
    },
    image: {
        height: '75px',
        width: '75px',
        margin: '0 auto',
        marginTop: "15px"
    }
}));

export default LaunchCard