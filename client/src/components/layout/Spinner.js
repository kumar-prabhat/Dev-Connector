import React, { Fragment } from 'react';
import Spinner from './Spinner.gif';

export default () => (
  <Fragment>
    <img
      src={Spinner}
      style={{ width: '170px', margin: 'auto', display: 'block' }}
      alt='Loading...'
    />
  </Fragment>
);
