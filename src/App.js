import React from "react";
import PokemonCard from "./Components/PokemonCard";
import Wrapper from "./Components/Wrapper";
import pokemon from "./pokemon.json";

const styles = {
  footer: {
    height: "100px",
    background: "darkblue",
    width: "100%",
    color: "white",
    textAlign: "center",
  }
}

function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
} 

class App extends React.Component {
  state = {
    pokemon,
    score: 0,
    topScore: 0,
  };

  
  handleScoreIncrement = (id) => {
    console.log(this.state.pokemon)
    var scanPokemon = this.state.pokemon
    for(let j=0;j<scanPokemon.length;j++){
      if (id===scanPokemon[j].id){
        console.log("Found it! " + scanPokemon[j].id);
        var identifier = scanPokemon[j];
      }
    }
    if (!identifier.clicked){
      identifier.clicked = true;
      console.log(identifier.name);
      this.setState({score: this.state.score + 1})
    }
    else {
      for (let i=0; i<pokemon.length;i++){
        pokemon[i].clicked=false;
      }
      if (this.state.score > this.state.topScore){
        this.setState({topScore: this.state.score})
      }
      this.setState({score: 0})
    }
    this.setState({pokemon: shuffleArray(pokemon)});
   
    


  }


  render() {
    return <div>
      <h1> Score: {this.state.score} | Top Score: {this.state.topScore}</h1>
        <Wrapper>
          {this.state.pokemon.map(pokeman => (
            <PokemonCard
              clicked = {pokeman.clicked}
              handleScoreIncrement = {this.handleScoreIncrement}
              id={pokeman.id}
              key={pokeman.id}
              image={pokeman.image}
            />
          ))}
        </Wrapper>
    </div>
  
  }
}

export default App;
