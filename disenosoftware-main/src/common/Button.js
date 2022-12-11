import { render } from '@testing-library/react';
import React from 'react';
import Button from 'react-bootstrap/Button';

class boton extends React.Component {
  render() {
    return (
        <>
          <div className="mb-2">
            <Button variant="primary" size="lg">
              Large button
            </Button>{' '}
            <Button variant="secondary" size="lg">
              Large button
            </Button>
          </div>
          <div>
            <Button variant="primary" size="sm">
              Small button
            </Button>{' '}
            <Button variant="secondary" size="sm">
              Small button
            </Button>
          </div>
        </>
      );
  }
}

export default boton;