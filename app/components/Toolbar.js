import React from 'react';
import { ToolbarAndroid } from 'react-native';


import images from '../config/images';

export default class Toolbar extends React.Component {

	onActionSelected(position) {
    console.log("Toolbar action pressed: ", position);
	}

	render() {
		return (
			<ToolbarAndroid
			  title="AwesomeApp"
			  actions={[{title: 'Settings', icon: images.logo, show: 'ifRoom'}]}
			  onActionSelected={this.onActionSelected} 
			  style={{ backgroundColor: '#e9eaed', height: 56, }}
			/>
		);
	}
}

