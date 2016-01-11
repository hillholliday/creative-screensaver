require('styles/App.scss');


require("!script!../scripts/jquery-2.1.4.js");
require("!script!../scripts/huey.js");

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

 		setInterval(function(){
		 	if(that.state.count === (that.state.dribbbleList.length - 1)){
	 			that.setState({
	 				count: 0
	 			});
	 		}

 			that.setState({
				count: that.state.count + 1
			});
 		}, 6000);
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
	adjustColors(current){
		huey(current, function(error, rgb, image) {
			console.log(error);
			if(rgb == null){
				$('body').css('background-color','rgb(25,25,25)');
			}
			else{
				var red = rgb[0]
				var green = rgb[1]
				var blue = rgb[2]

				$('body').css('background-color','rgb('+red+','+green+','+blue+')');
			}

			$('body').css('background-color','rgb('+red+','+green+','+blue+')');
		});
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
					<p>now loading</p>
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

			return (
	    		<div className="index">
	    			<section>
	    				<div className="image-holder">
	    					<img src={img} alt={current.username}/>
	    				</div>
	    				<div className="content-holder">
	    					<header>
		    					<h2>{current.username}</h2>
		    					<ul>
		    						<li><span dangerouslySetInnerHTML={{__html: '<svg class="icon icon-eye"><use xlink:href="#icon-eye"></use></svg>'}}></span> {current.views_count}</li>
		    						<li><span dangerouslySetInnerHTML={{__html: '<svg class="icon icon-comment"><use xlink:href="#icon-comment"></use></svg>'}}></span> {current.comments_count}</li>
		    						<li><span dangerouslySetInnerHTML={{__html: '<svg class="icon icon-heart"><use xlink:href="#icon-heart"></use></svg>'}}></span> {current.likes_count}</li>
		    					</ul>
	    					</header>
			 				<div dangerouslySetInnerHTML={{__html : current.description}}></div>
	    				</div>
		 			</section>
		 			<div className="background-image" style={{backgroundImage: 'url(' + img + ')'}}></div>
	    		</div>
	    	);
		}
	}
}

AppComponent.defaultProps = {
};

export default AppComponent;
