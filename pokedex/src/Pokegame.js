import React from "react"
import Pokedex from "./Pokedex"

class Pokegame extends React.Component {
   static defaultProps = {
      pokemon : [
         { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
         { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
         { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
         { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
         { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
         { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
         { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
         { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
      ]
   }
   render(){
      var arrLength = this.props.pokemon.length
      var pokemonA = []
      var pokemonB = []
      var scoreA = 0
      var scoreB = 0
      for(var i = 0; i < arrLength; i++){
         var index = Math.floor(Math.random() * this.props.pokemon.length)
         if(i < 4){
            pokemonA.push(this.props.pokemon[index])
            scoreA += this.props.pokemon[index].base_experience
            this.props.pokemon.splice(index, 1)
         }
         else{
            pokemonB.push(this.props.pokemon[index])
            scoreB += this.props.pokemon[index].base_experience
            this.props.pokemon.splice(index, 1)
         }
      }
      if(scoreA > scoreB){
         return(
            <div>
            <Pokedex pokemon={pokemonA}/>
            <h3 className="Pokegame-winner">This hand wins with a score of {scoreA}!</h3>
            <Pokedex pokemon={pokemonB}/>
            <h4 className="Pokegame-loser">This hand loses :( with a score of {scoreB}</h4>
            </div>
         )
      }
      else {
         return(
            <div>
            <Pokedex pokemon={pokemonA}/>
            <h4 className="Pokegame-loser">This hand loses :( with a score of {scoreA}</h4>
            <Pokedex pokemon={pokemonB}/>
            <h3 className="Pokegame-winner">This hand wins with a score of {scoreB}!</h3>
            </div>
         )
      }
   }
}

export default Pokegame