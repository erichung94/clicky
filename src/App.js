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
  },
}

class App extends React.Component {
  state = {
    pokemon,
    score: 0,
    topScore: 0,
    clicked: false
  };

  handleScoreIncrement = (id) => {
    console.log(pokemon[id-1].clicked);
    if(pokemon[id-1].clicked === false){
      pokemon[id-1].clicked = true;
      this.setState({score: this.state.score + 1})
    }
    else{
      for (let i=0; i<pokemon.length;i++){
        pokemon[i].clicked=false;
        this.setState({score: 0})
      }

    }
  }
  

  render() {
    return <div>
      <h1> Score: {this.state.score} | Top Score: {this.state.topScore}</h1>
      <div>
        <Wrapper>
          {this.state.pokemon.map(pokeman => (
            <PokemonCard
              clicked = {this.clicked}
              handleScoreIncrement = {this.handleScoreIncrement}
              id={pokeman.id}
              key={pokeman.id}
              image={pokeman.image}
            />
          ))}
        </Wrapper>
        <div class="footer navbar-fixed-bottom" style={styles.footer}>
          <span style={styles.span}>Whatabatbingbong</span>
        </div>
      </div>
    </div>
  
  }
}

export default App;
