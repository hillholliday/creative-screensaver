'use strict';

require('styles//SignUp.scss');

import React from 'react';
import { History } from 'react-router';
import { Lifecycle } from 'react-router'

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
  toggleInstructions(){
  	$('body').toggleClass('instructions-shown');

  	if($('body').hasClass('instructions-shown')){
  		$('button.show-instructions').html('Hide Installation Instructions');
  	}
  	else{
  		$('button.show-instructions').html('Installation Instructions');
  	}
  }
  render() {
  	if(window.location.pathname === "/"){
  		setTimeout(function(){
  			$('body').addClass('signup-ready');
  		},1000);
  	}
    return (
      <div className="signup-component">
        <section className="intro">
			<h1>Creative Screensaver</h1>
			<p>We know you love to create amazing design work outside of the agency and we know you post them on Dribbble.  Let’s showcase that work with everyone else here. Signup below to be featured.</p>

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

		<section className="instructions">
			<h2>Instructions</h2>
			<ol>
				<li>Download the screensaver.zip file</li>
				<li>Then you can unarchive the .zip <strong>right-click</strong> on the HHCC Creative.saver file, and click <strong>open</strong>. </li>
				<li>This should open up your Screensaver preferences. Hit install, and select HHCC Creative as your default. </li>
				<li>You can preview the screensaver full screen by clicking on the small preview to the right of the screensaver’s list.</li> 
			</ol>
		</section>

		<button className="show-instructions" onClick={this.toggleInstructions}>
			Installation Instructions
		</button>

        <div className="hh-logo" dangerouslySetInnerHTML={{__html: '<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"><g><path d="M29.458 53.664V6.336l-9.504 4.945v13.65L8.11 26.62l-.01-9.15-7.817 4.053v19.86L8.1 44.674V34.268l11.854.554v14.846l9.504 3.996zM51.9 17.47l-.01 9.148-11.843-1.687V11.28l-9.505-4.944v47.328l9.505-3.996V34.822l11.854-.554v10.407l7.817-3.296V21.52L51.9 17.47z"/></g></svg>'}}></div>
      </div>
    );
  }
}

SignUpComponent.displayName = 'SignUpComponent';

// Uncomment properties you need
// SignUpComponent.propTypes = {};
// SignUpComponent.defaultProps = {};

export default SignUpComponent;
