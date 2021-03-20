import React from 'react';
import { 
    makeStyles,
    Grid,
    Typography,
    Card,
    CardActionArea,
    CardContent,
    CardMedia, 
    TextField
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { formatDate } from 'utils/formatter';
import { allCoresSuccessfullyLanded } from 'utils/helper';
import { SubmitButton } from 'components/SubmitButton'

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: '0px',
    backgroundColor: '#FAFBFD',
  },
  eventSection: {
    textAlign: 'center',
    padding: '50px',
  },
  welcome: {
    fontFamily: 'Pacifico',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '39px',
    lineHeight: '90px',
    textAlign: 'center',
    letterSpacing: '1px',
    color: '#333333',
  },
  instruction: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '24px',
    lineHeight: '130%',
    textAlign: 'center',
    letterSpacing: '1px',
    color: '#333333',
  },
  eventForm: {
    marginTop: '82px',
  },
  firstSection: {
    marginBottom: '39px',
  },
  guestSection: {
    marginBottom: '60px',
  },
  checks: {
    marginBottom: '46px',
  },
  eventHeader: {
    position: 'absolute',
    left: '45.28%',
    right: '45.21%',
    top: '11.13%',
    bottom: '86.43%',
    color: '#BF191A',
    fontWeight: 'bold',
    fontSize: '20.9589px',
    lineHeight: '34px',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
  },
  eventHeaderContainer: {
    background: '#FFFFFF',
    height: '200px',
  },
  infoGrid: {
    padding: '100px'
  },
  media: {
    height: 200,
  },
  allCores: {
    fontSize: '10px'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));

export const LaunchView = (props) => {
  const classes = useStyles();
  const { data, onClick, onChange } = props;
  return (
      <Grid container spacing={2} className={classes.root}>
        <Grid item xs={12} md={12} className={classes.eventHeaderContainer}>
          <Typography variant="h6" className={classes.eventHeader}>
            Launches
          </Typography>
        </Grid>
        <Grid container spacing={2} className={classes.root}>
            <Grid item xs={12} md={6}>
                <TextField
                    id="filled-full-width"
                    label="Label"
                    placeholder="Placeholder"
                    fullWidth
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="filled"
                    name="name"
                    onChange={onChange}
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <SubmitButton name="Search" onClick={onClick} />
            </Grid>
        </Grid>
        <Grid container spacing={2} className={classes.infoGrid}>
            {data.map(details => <Grid item xs={12} md={2}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={details.links.patch.small}
                      title={details.name}
                    />
                    <CardContent className={classes.tileText}>
                      <Typography gutterBottom>
                        {details.name}
                      </Typography>
                      <Typography gutterBottom>
                        {details.date_utc ? formatDate(details.date_utc) : ''}
                    </Typography>
                      <Typography gutterBottom className={classes.allCores}>
                        All cores successfully landed - {details.cores ? allCoresSuccessfullyLanded(details.cores) : ''}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>)}
            </Grid>
      </Grid>
  );
};

LaunchView.propTypes = {
    data: PropTypes.instanceOf(Object).isRequired,
    onClick: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
};
