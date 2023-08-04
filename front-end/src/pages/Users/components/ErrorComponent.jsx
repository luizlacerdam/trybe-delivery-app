import React from 'react';
import PropTypes from 'prop-types';

export default function ErrorComponent({ status, statusText, message }) {
  return (
    <div>
      <div className="unauthorized">
        <h1>{status}</h1>
        <h2>{statusText}</h2>
        <p>{message}</p>
      </div>
    </div>
  );
}
ErrorComponent.propTypes = ({
  status: PropTypes.any,
  statusText: PropTypes.any,
  message: PropTypes.any,
}).isRequired;
