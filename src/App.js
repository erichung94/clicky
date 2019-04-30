import React from "react";
import PokemonCard from "./Components/PokemonCard";
import Wrapper from "./Components/Wrapper";
import pokemon from "./pokemon.json";

const styles = {
  footer: {
    height: "100px",
    background: "darkblue",
    width: "100%",
    color: "white"
  }
}

class App extends React.Component {
  state = {
    pokemon
  };

  render() {
    return <div>
      <Wrapper>
        {this.state.pokemon.map(pokeman => (
          <PokemonCard
            id={pokeman.id}
            key={pokeman.id}
            image={pokeman.image}
          />
        ))}
      </Wrapper>
      <div style={styles.footer}>Whatabatbingbong</div>
      </div>
  
  }
}

export default App;
