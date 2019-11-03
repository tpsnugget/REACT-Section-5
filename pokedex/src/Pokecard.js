import React from "react"
import "./Pokecard.css"

const imgUrlPart1 = " https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"

var padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number)

// function padToThree(number){
//    if(number <= 999){
//       return `00${number}`.slice(-3)
//    }
//    else { return number}
// }

class Pokecard extends React.Component {
   static defaultProps = {
      id: 4,
      name: 'Charmander',
      type: 'fire',
      base_experience: 62
   }

   render() {
      const p = this.props
      var imgUrl = `${imgUrlPart1}${padToThree(p.id)}.png`
      return (
         <div className="Pokecard" >
            <div className="Pokecard-cards">
               <div className="Pokecard-name"> {p.name} </div>
               <img className="Pokecard-img" src={imgUrl} alt={p.name} />
               <div className="Pokecard-data"> Type: {p.type} </div>
               <div className="Pokecard-data"> Exp: {p.base_experience} </div>
               <div> {p.i} </div>
            </div>
         </div >
      )
   }
}

export default Pokecard

