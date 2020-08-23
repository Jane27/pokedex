import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { limit } from '../util'



const Title = styled.h1`
  color: black;
  margin-top: 50px;
`;

const Item = styled.div`
  padding: 5px 0;
  text-transform: capitalize;
  background-color: #f1f1f1;
  text-align: center;
  line-height: 55px;
  width: 25%;
  margin: 10px;
`;

const Content = styled.div`
  display:flex;
  margin:0 auto;
  flex-wrap: wrap;
  width:80%;
  justify-content:space-between
`;

const PokemonList = ({ list, fetchPokemons }) => {
  const { count, next, results } = list

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <>
      <Title>My Pokedex</Title>
      <button onClick={() => fetchPokemons(next ? limit : 0)}>More {results.length} / {count})</button>

      <Content>
        {results.map(({ name, url }, index) => {
          const id = url.split('/').slice(-2)[0]
          return (
            <Item key={index + name}>
              <Link to={`/detail?id=${id}`}>{name}</Link>
            </Item>)
        }
        )}
      </Content>
    </>
  );
};

const mapState = state => ({
  list: state.list,
})

const mapDispatch = dispatch => ({
  fetchPokemons: dispatch.list.fetchPokemons,
})

export default connect(
  mapState,
  mapDispatch
)(PokemonList)