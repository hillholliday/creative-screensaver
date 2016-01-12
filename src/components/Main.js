require('styles/App.scss');

import React from 'react';

class AppComponent extends React.Component {
	render(){
		return (
	      <div className="app-component">
	        {this.props.children}
	      </div>
	    );
	}
}

AppComponent.defaultProps = {
};

export default AppComponent;
