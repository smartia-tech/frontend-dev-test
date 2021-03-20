import React from 'react';
import { LinkRoute } from 'components/LinkRoute';
import { ROOT } from './CONSTANTS';

export const NotFound = () => (
  <>
    <LinkRoute to={ROOT}>Home</LinkRoute>
    <h2>404: page not found!</h2>
  </>
);
