import React from 'react';
import './styles.css';

function Card(props){
  return (
    <div className="card-container">
      <img alt={props.monster.name} src={`https://robohash.org/${props.monster.id}?set=set2`} />
      <h2>{props.monster.name}</h2>
      <p>{props.monster.email}</p>
    </div>
  );
}

export default Card;