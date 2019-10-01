import React from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

class  App extends React.Component {
  constructor(){
    super(); //super helps us with this by calling React.Component's Constructor

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters:users}));
  }
  render(){
    const { monsters, searchField} = this.state; //destructure
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase()) //Monster in API === Input from users
    )
    return(
      <div className="App">
        <h1> Monster Rolodex </h1>
        <SearchBox
        placeholder='search monsters'
        handleChange={e =>this.setState({searchField: e.target.value})}
        />
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
