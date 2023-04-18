import React from "react";
import CardList from "../components/CardList.js";
import SearchBox from '../components/SearchBox.js';
import Scroll from '../components/Scroll.js';
import ErrorBoundry from "../components/ErrorBoundry.js";
import './App.css';

class App extends React.Component {
   constructor() {
      super();
      this.state = {
         robots: [],
         searchfield: ''
      }
   }

   componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({robots: users}));      
   }

   onSearchChange = (event) => {
      this.setState({searchfield: event.target.value}); 
   }

   render() {
      const {robots, searchfield} = this.state;
      const filteredRobots = robots.filter(item=>{
         return item.name.toLowerCase().includes(searchfield.toLowerCase());
      });
      return !robots.length ? 
         <h1 className="tc mv6">Loading...</h1> :
         (       
            <div className='tc'>
               <h1 className='f1'>RoboFriends</h1>
               <SearchBox searchChange={this.onSearchChange} />
               <Scroll>
                  <ErrorBoundry>
                     <CardList robots={filteredRobots} />
                  </ErrorBoundry>
               </Scroll>
            </div>
         )     
   }
}

export default App;