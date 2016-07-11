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
  componentDidMount(){
    if ( window.navigator.userAgent.indexOf("Windows NT") != -1){
        $('button.show-instructions').each(function(){$(this).hide()});
        $('a.download').each(function(){
            var el = $(this);
            el.addClass('not-applicable');
            el.find('span').text('Not avaialble for Windows :(');
        });
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
			<img src="/images/install-instructions.gif"/>
            <ol>
				<li>Download the screensaver.zip file</li>
				<li>Unarchive the .zip.</li> 
                <li><strong>right-click</strong> on the HHCC Creative.saver file, and click <strong>open</strong>. </li>
				<li>This should open up your Screensaver preferences. Hit install, and select HHCC Creative as your default. </li>
				<li>You can preview the screensaver full screen by clicking on the small preview to the right of the screensaver’s list.</li>
			</ol>
            <p className="sub"><em>Questions? Hit up <a href="mailto:Rob.Erskine@hhcc.com">Rob.Erskine@hhcc.com</a> for help.</em></p>
		</section>

		<button className="show-instructions" onClick={this.toggleInstructions}>
			Installation Instructions
		</button>

        <div className="hh-logo" dangerouslySetInnerHTML={{__html: '<svg xmlns="http://www.w3.org/2000/svg" width="69.863" height="100" viewBox="174.271 0 69.863 100"><path d="M242.67 10.204h-10.335c-.94 0-1.462.525-1.462 1.465v29.865c0 .94-.525 1.46-1.465 1.46H217.4c-.94 0-1.463-.52-1.463-1.46V1.463c0-.938-.52-1.464-1.463-1.464h-10.55c-.938 0-1.46.523-1.46 1.463v40.07c0 .94-.52 1.46-1.46 1.46h-12.008c-.94 0-1.463-.52-1.463-1.46V11.667c0-.94-.523-1.464-1.464-1.464H175.73c-.94 0-1.462.525-1.462 1.465v76.44c0 .94.52 1.462 1.46 1.462h10.337c.94 0 1.465-.52 1.465-1.463V57.302c0-.94.522-1.46 1.463-1.46h12.007c.94 0 1.462.52 1.462 1.46v41.01c0 .94.52 1.462 1.462 1.462h10.55c.94 0 1.463-.52 1.463-1.463V57.303c0-.94.52-1.46 1.46-1.46h12.008c.94 0 1.465.52 1.465 1.46v30.805c0 .94.522 1.463 1.463 1.463h10.338c.938 0 1.46-.52 1.46-1.463V11.67c0-.94-.52-1.466-1.46-1.466"/></svg>'}}></div>
      </div>
    );
  }
}

SignUpComponent.displayName = 'SignUpComponent';

// Uncomment properties you need
// SignUpComponent.propTypes = {};
// SignUpComponent.defaultProps = {};

export default SignUpComponent;
