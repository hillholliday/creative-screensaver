'use strict';

import React from 'react';

require('styles//SignUp.css');

class SignUpComponent extends React.Component {
  render() {
    return (
      <div className="signup-component">
        Signup view
      </div>
    );
  }
}

SignUpComponent.displayName = 'SignUpComponent';

// Uncomment properties you need
// SignUpComponent.propTypes = {};
// SignUpComponent.defaultProps = {};

export default SignUpComponent;
