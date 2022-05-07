import React from 'react';
import pokemons from './data';

class Pokes extends React.Component {
  render() {
    return (
      <section className='pokes-section'>
        {pokemons.map((poke) => {
          return (
            <div key={poke.id} className='poke-container'>
              <h3>{poke.name}</h3>
              <p >{poke.type}</p>
              <p>AverageWeight: {poke.averageWeight.value} {poke.averageWeight.measurementUnit}</p>
              <img src={poke.image} alt='pokes imagem'></img>
            </div>
          )
        })}
      </section>
    )
  }
}

export default Pokes;