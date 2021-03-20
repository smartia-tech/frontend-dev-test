import React from 'react';
import {
  Grid,
  Button,
  makeStyles,
} from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles(() => ({
  registerButton: {
    backgroundColor: '#BF191A',
    color: '#FFFFFF',
    borderRadius: '5px',
    width: '208px',
    textTransform: 'none',
    textAlign: 'center',
    '&:hover': {
      backgroundColor: '#BF191A',
      color: '#FFFFFF',
    },
  }
}));

export const SubmitButton = (props) => {
  const classes = useStyles();
  const { name, disabled, onClick } = props;
  return (
    <>
      <Grid className="register-button-container">
        <Button disabled={disabled} className={classes.registerButton} onClick={onClick} variant="outlined" size="large">{name}</Button>
      </Grid>
    </>
  );
};

SubmitButton.propTypes = {
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
