import React, { useState, useEffect } from 'react';
import Card from '../card';
import SearchBox from '../search-box';
import './styles.css';


function CardList() {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState('');
  
  useEffect(() => {
    async function fetchData(){
      const response = await (await fetch('https://jsonplaceholder.typicode.com/users')).json();
      setMonsters(response);
    }

    fetchData();
    
  }, []);

  function handleChange(e){
    setSearchField(e.target.value);
  }

  const filteredMonsters = monsters.filter( monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

  return (
    <>
    <h1>Monsters Rolodex</h1>
      <SearchBox placeholder="search monsters" handleChange={ handleChange }/>
      <div className="card-list">
          {filteredMonsters.map(monster => (
            <Card key={monster.id} monster={monster} />
          ))}

      </div>
    </>
  )
}

export default CardList;