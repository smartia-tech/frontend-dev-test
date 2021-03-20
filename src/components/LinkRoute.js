import React from 'react';
import {
  makeStyles,
  Link
} from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles(() => ({
  link: {
    color: '#BF191A',
    textAlign: 'center',
    paddingTop: '30px',
  }
}));

export const LinkRoute = (props) => {
  const classes = useStyles();
  const { name, url } = props;
  return (
    <>
      <Link className={classes.link} href={url}>{name}</Link>
    </>
  );
};

LinkRoute.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};
