import React from 'react';
import View from 'reapp-ui/views/View';
import Button from 'reapp-ui/components/Button';
import Input from 'reapp-ui/components/Input';
import Superagent from 'superagent';
import Gallery from 'reapp-ui-/components/Gallery';

const flickrKey = '';
const base = `https://api.flickr.com/services/rest/api_key=${flickerKey}&format=rest&format=json&nojsoncallback=1`;

export default React.createClass({
	getInitialState() {
		return {
			photos: []
		}
	},
})


export default React.createClass({
	render() {

		var {photos } = this.state;

		return (
			<View title = "Flicker Search" styles{{ inner: {padding: 20} }}>
			<p>Hello World</p>
			</View>
		);
	}
});