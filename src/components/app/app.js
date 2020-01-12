import React, { Component } from 'react'
import { CardList } from '../card-list/card-list.component'
import { SearchBox } from '../search-box/search-box.component'


import './app.styles.css'

export default class app extends Component {
 state = {
      monsters: [],
      searchField: ''
    }
  

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  handleChange = (evt) => {
    this.setState({ searchField: evt.target.value})
  }

  

  render() {
    const { monsters, searchField } = this.state
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase())
    })
    return (
      
      <div className='App'>
        <h1>Monster Rolodex</h1>
        <SearchBox  
          placeholder='search monsters'
          handleChange = { this.handleChange }
        />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

// const App = () => {
//     return(
//         <div className='container'>
//             <h1>Page de monstres</h1>
//         </div>
//     )
// }
