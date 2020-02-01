import React, {Component} from 'react';
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox'
import Scroll from '../components/Scroll'
import './App.css';

class App extends Component {
	constructor(){
		super();
		this.state = {
			robots: [],
			searchtext: ''
		}
	}
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(robots => this.setState({robots}));
	}
	onSearchChanged= (event)=> {
		this.setState({searchtext: event.target.value});
	}
	render() {
		const {robots, searchtext} = this.state;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchtext.toLowerCase());
		});
		return !robots.length ? 
		<h2>loading robots, please wait...</h2> 
		: (
			<div className='tc'>
				<h1 className='sega-font'>RoboFriends</h1>
				<Searchbox searchChange={this.onSearchChanged}/>
				<Scroll>
					<CardList robots={filteredRobots}/>
				</Scroll>
			</div>
		);
		
	}
}

export default App;