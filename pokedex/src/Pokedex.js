import React from "react"
import "./Pokedex.css"
import Pokecard from "./Pokecard"

class Pokedex extends React.Component {
   render() {
      return (
         <div className="Pokedex">
            <h1 className="Pokedex-h1">Pokedex </h1>
            <div className="Pokedex-cards">
               {this.props.pokemon.map((p, index) => (
                  <Pokecard id={p.id} name={p.name} type={p.type} base_experience={p.base_experience} />
               ))}
            </div>
         </div>
      )
   }
}

export default Pokedex