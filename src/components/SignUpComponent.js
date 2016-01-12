'use strict';

require('styles//SignUp.scss');

import React from 'react';
import { History } from 'react-router';

var config = require('config');

class SignUpComponent extends React.Component {
  handleSubmit(event){
  	event.preventDefault();

  	var data = $('form').serialize();

  	$.ajax({
  		url: config.default.apiUrl,
  		type: 'POST',
  		data: data,
  		headers: {'X-Requested-With': 'XMLHttpRequest'}
  	})
  	.done(function() {
  		$('body').addClass('success');
  	})
  	.fail(function() {
  		alert('Sorry, there was an error with your submission. Please validate your submission or try again later.');
  	})
  	.always(function() {
  		console.log("complete");
  	});
  	
  }
  render() {
    return (
      <div className="signup-component">
        <section className="intro">
			<h1>Creative Screensaver</h1>
			<p>Signup to be shown in Hill Holliday’s creative screensaver showcase:</p>
			<form method="post" action="" accept-charset="UTF-8" onSubmit={this.handleSubmit}>
				<input type="hidden" name="action" value="guestEntries/saveEntry"/>
			    <input type="hidden" name="redirect" value="/"/>
			    <input type="hidden" name="sectionId" value="3"/>

			    <fieldset className="name">
				    <input id="firstName" type="text" name="fields[firstName]" required title="Your first name is required." />
			    	<label for="firstName">First name*</label>
			    </fieldset>
			    <fieldset className="name lastname">
				    <input id="lastName" type="text" name="fields[lastName]" required title="Your last name is required."/>
				    <label for="lastName">Last name*</label>
			    </fieldset>
			    <fieldset className="longer">
			    	<input id="dribbbleUsername" type="text" name="fields[dribbbleUsername]" required title="Your Dribbble username is required."/>
			    	<label for="dribbbleUsername">Dribbble Username*</label>
			    	<p>Not sure what your Dribbble username is? <a tabIndex="-1" href="https://dribbble.com/session/new" target="_blank">Try signing in here.</a></p>
			    </fieldset>
			    <fieldset className="longer">
			    	<input id="userEmail" type="email" name="fields[userEmail]" required/>
			    	<label for="userEmail">Your Email*</label>
			    </fieldset>

			    <input type="submit" value="submit" className="primary-action"/>
			</form>

			<a className="download" download href={config.default.screensaverUrl}>
				<span>Download the screensaver here</span>
			</a>
		</section>

		<section className="thanks">
			<h2>Thanks for signing up.</h2>
			<p>We’re currently reviewing your submission. After we’ve validated that you’re legit who you say you are, we’ll go ahead and add you to the mix.</p>
			<a className="download primary-action" download href={config.default.screensaverUrl}>
				<span>Download the screensaver here</span>
			</a>
		</section>
      </div>
    );
  }
}

SignUpComponent.displayName = 'SignUpComponent';

// Uncomment properties you need
// SignUpComponent.propTypes = {};
// SignUpComponent.defaultProps = {};

export default SignUpComponent;
