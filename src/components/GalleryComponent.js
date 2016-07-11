'use strict';

require('styles//Gallery.scss');

import React from 'react';
import { History } from 'react-router';

var config = require('config');

class GalleryComponent extends React.Component {
  constructor(props){
	  	super(props);
	  	this.state = {
	  		dribbbleList: null,
	  		count: 0,
	  	}
 	}
 	rotateImages(){
 		var that = this;
 		var timer = 14000;

 		setInterval(function(){

		 	if(that.state.count === (that.state.dribbbleList.length - 1)){
	 			that.setState({
	 				count: 0
	 			});
	 		}

 			that.setState({
				count: that.state.count + 1
			});
 		}, timer);
 	}
 	loadImages(){
	  	var that = this;
		$.ajax({
			url: config.default.apiUrl+'api/random',
			type: 'GET',
		})
		.done(function(data) {
			console.log("success");
			that.setState({
				dribbbleList:data 
			});
			that.rotateImages();
			$('body').addClass('ready');
		})
		.fail(function(error) {
			console.log(error);
		})
		.always(function() {
			console.log("complete");
		});
		return;
	}
	componentWillMount(){
		this.loadImages();
		console.log('will mount');
	}
	componentWillReceiveProps(){
		this.loadImages();
		console.log('will receive props');
	}
	componentDidMount(){
		console.log('mounted');
	}
	render() {
		// loading app
		if (!this.state.dribbbleList) {
			return(
				<div className="loading-screen">
					<div className="hh-logo" dangerouslySetInnerHTML={{__html: '<svg xmlns="http://www.w3.org/2000/svg" width="69.863" height="100" viewBox="174.271 0 69.863 100"><path d="M242.67 10.204h-10.335c-.94 0-1.462.525-1.462 1.465v29.865c0 .94-.525 1.46-1.465 1.46H217.4c-.94 0-1.463-.52-1.463-1.46V1.463c0-.938-.52-1.464-1.463-1.464h-10.55c-.938 0-1.46.523-1.46 1.463v40.07c0 .94-.52 1.46-1.46 1.46h-12.008c-.94 0-1.463-.52-1.463-1.46V11.667c0-.94-.523-1.464-1.464-1.464H175.73c-.94 0-1.462.525-1.462 1.465v76.44c0 .94.52 1.462 1.46 1.462h10.337c.94 0 1.465-.52 1.465-1.463V57.302c0-.94.522-1.46 1.463-1.46h12.007c.94 0 1.462.52 1.462 1.46v41.01c0 .94.52 1.462 1.462 1.462h10.55c.94 0 1.463-.52 1.463-1.463V57.303c0-.94.52-1.46 1.46-1.46h12.008c.94 0 1.465.52 1.465 1.46v30.805c0 .94.522 1.463 1.463 1.463h10.338c.938 0 1.46-.52 1.46-1.463V11.67c0-.94-.52-1.466-1.46-1.466"/></svg>'}}></div>
				</div>
			)
		}
		// load the app into place
		else{

			var current = this.state.dribbbleList[this.state.count];
			var img;

			if(current.images.hidpi){
				img = current.images.hidpi;
			}
			else{
				img = current.images.normal;
			}

			var description;

			if(current.description){
				description = <div dangerouslySetInnerHTML={{__html : current.description}}></div>;
			}

			$('.signup-component').hide();

			return (
	    		<div className="index">
	    			<section className="gallery-holder">
	    				<div className="image-holder">
	    					<img src={img} alt={current.username}/>
	    				</div>
	    				<div className="content-holder">
	    					<div className="content">
		    					<header>
			    					<h2>{current.username}</h2>
			    					<ul>
			    						<li><span dangerouslySetInnerHTML={{__html: '<svg class="icon icon-eye"><use xlink:href="#icon-eye"></use></svg>'}}></span> {current.views_count}</li>
			    						<li><span dangerouslySetInnerHTML={{__html: '<svg class="icon icon-comment"><use xlink:href="#icon-comment"></use></svg>'}}></span> {current.comments_count}</li>
			    						<li><span dangerouslySetInnerHTML={{__html: '<svg class="icon icon-heart"><use xlink:href="#icon-heart"></use></svg>'}}></span> {current.likes_count}</li>
			    					</ul>
		    					</header>
				 				{description}
			 				</div>
	    				</div>
		 			</section>
		 			<div className="background-image" style={{backgroundImage: 'url(' + img + ')'}}></div>
		 			<div className="hh-logo" dangerouslySetInnerHTML={{__html: '<svg xmlns="http://www.w3.org/2000/svg" width="69.863" height="100" viewBox="174.271 0 69.863 100"><path d="M242.67 10.204h-10.335c-.94 0-1.462.525-1.462 1.465v29.865c0 .94-.525 1.46-1.465 1.46H217.4c-.94 0-1.463-.52-1.463-1.46V1.463c0-.938-.52-1.464-1.463-1.464h-10.55c-.938 0-1.46.523-1.46 1.463v40.07c0 .94-.52 1.46-1.46 1.46h-12.008c-.94 0-1.463-.52-1.463-1.46V11.667c0-.94-.523-1.464-1.464-1.464H175.73c-.94 0-1.462.525-1.462 1.465v76.44c0 .94.52 1.462 1.46 1.462h10.337c.94 0 1.465-.52 1.465-1.463V57.302c0-.94.522-1.46 1.463-1.46h12.007c.94 0 1.462.52 1.462 1.46v41.01c0 .94.52 1.462 1.462 1.462h10.55c.94 0 1.463-.52 1.463-1.463V57.303c0-.94.52-1.46 1.46-1.46h12.008c.94 0 1.465.52 1.465 1.46v30.805c0 .94.522 1.463 1.463 1.463h10.338c.938 0 1.46-.52 1.46-1.463V11.67c0-.94-.52-1.466-1.46-1.466"/></svg>'}}></div>
	    		</div>
	    	);
		}
	}
}

GalleryComponent.displayName = 'GalleryComponent';

// Uncomment properties you need
// GalleryComponent.propTypes = {};
// GalleryComponent.defaultProps = {};

export default GalleryComponent;
