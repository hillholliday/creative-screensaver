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

 		console.log("current count:" + that.state.count);
 		console.log("list length:" + that.state.dribbbleList.length);

 		setInterval(function(){

		 	if(that.state.count === (that.state.dribbbleList.length - 1)){
	 			that.setState({
	 				count: 0
	 			});
	 		}

 			that.setState({
				count: that.state.count + 1
			});
 		}, 5000);
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
	componentWillReceiveProps(){
		this.loadImages();
		console.log('will receive props');
	}
	componentDidMount(){
		console.log('mounted');
	}
	render() {
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
	    		</div>
	    	);
		}
	}
}

AppComponent.defaultProps = {
};

export default AppComponent;
