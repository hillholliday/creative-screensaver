require('styles/App.scss');
require("!script!../scripts/jquery-2.1.4.js");

import React from 'react';

class AppComponent extends React.Component {
	constructor(props){
	  	super(props);
	  	this.state = {
	  		dribbbleList: null,
	  		count: 0,
	  	}
 	}
 	rotateImages(){
 		var that = this;
 		var timer = 6000;

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
			url: 'http://dribbble-screensaver-api.hhcc.dev/api/random',
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
					<div className="hh-logo" dangerouslySetInnerHTML={{__html: '<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"><g fill="#231F20"><path d="M29.458 53.664V6.336l-9.504 4.945v13.65L8.11 26.62l-.01-9.15-7.817 4.053v19.86L8.1 44.674V34.268l11.854.554v14.846l9.504 3.996zM51.9 17.47l-.01 9.148-11.843-1.687V11.28l-9.505-4.944v47.328l9.505-3.996V34.822l11.854-.554v10.407l7.817-3.296V21.52L51.9 17.47z"/></g></svg>'}}></div>
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

			console.log(window.location.pathname);

			var description;

			if(current.description){
				description = <div dangerouslySetInnerHTML={{__html : current.description}}></div>;
			}

			return (
	    		<div className="index">
	    			<section>
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
		 			<div className="hh-logo" dangerouslySetInnerHTML={{__html: '<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"><g fill="#231F20"><path d="M29.458 53.664V6.336l-9.504 4.945v13.65L8.11 26.62l-.01-9.15-7.817 4.053v19.86L8.1 44.674V34.268l11.854.554v14.846l9.504 3.996zM51.9 17.47l-.01 9.148-11.843-1.687V11.28l-9.505-4.944v47.328l9.505-3.996V34.822l11.854-.554v10.407l7.817-3.296V21.52L51.9 17.47z"/></g></svg>'}}></div>
	    		</div>
	    	);
		}
	}
}

AppComponent.defaultProps = {
};

export default AppComponent;
