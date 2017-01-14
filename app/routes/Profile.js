import React from 'react';
import {
	AsyncStorage,
	Text,
	View
} from 'react-native';


export default class Profile extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			avatar: '',
			launchNumber: null
		};

		this.getUserInfo();
		this.initStorage();
	}

	static get STORAGE_KEYS() {
		return {
			launchNumber: '@ProfileScreen:launch',
			someOtherKey: '@ProfileScreen:something'
		};
	}

	// AsyncStorage usage demo
	initStorage() {
		console.log("Let's load something from storage");

		AsyncStorage.getItem(Profile.STORAGE_KEYS.launchNumber)
			.then(value => {
				if (value == null) {
					// does not exist -> Save to storage
					AsyncStorage.setItem(Profile.STORAGE_KEYS.launchNumber, JSON.stringify(1));
					this.setState({ launchNumber: 1 });
				} else {
					let num = JSON.parse(value);
					this.setState({
						launchNumber: num
					});
					AsyncStorage.setItem(Profile.STORAGE_KEYS.launchNumber, JSON.stringify(num + 1));
				}
			});
	}

	// Fetch usage demo
	getUserInfo() {
		console.log("Let's fetch this");

		return fetch('https://api.github.com/users/octocat')
			.then(response => response.json()) // or text() or blob()
			.then(data => {
				this.setState({
					avatar: data["avatar_url"]
				});
			});
	}


	render() {
		return (
			<View>
				<Text>See the code for API demos</Text>
				<Text>User avatar url: { this.state.avatar }</Text>
				<Text>App launched how many times?: { this.state.launchNumber == null ?
					"no idea" : this.state.launchNumber }</Text>
			</View>
		);
	}
}

