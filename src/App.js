import React, {Component} from 'react';
import { robots } from './robots';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css'


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users => this.setState({ robots: users}))
    }



    onSearchChange = (event) => {
        this.setState({searchField: event.target.value}) //storing
        }
    render() {
        const filteredRobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })
        return (<div className='tc'>
                    <h1 className='f2'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <CardList robots={filteredRobots}/>
                </div>)
    }
}

export default App;
