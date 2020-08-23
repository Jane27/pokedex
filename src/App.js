
import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PokemonList, PokemonDetail } from "./pages";


const Container = styled.div`
  text-align: center;
`;

const App = () => {
  return (
    <Router forceRefresh={false}>
      <Container>
        <Switch>
          <Route exact path="/" component={PokemonList} />
          <Route path="/detail" component={PokemonDetail} />
        </Switch>
      </Container>
    </Router>

  )
};


export default App;