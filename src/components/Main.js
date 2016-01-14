require('styles/App.scss');

import React from 'react';

import SignUpComponent from './SignUpComponent.js';

class AppComponent extends React.Component {
	render(){
		return (
	      <div className="app-component">
	      	<SignUpComponent />
	        {this.props.children}
	      </div>
	    );
	}
}

AppComponent.defaultProps = {
};

export default AppComponent;
