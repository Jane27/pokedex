import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { DetailTable, Loader } from "../components"
import { useQuery } from "../hooks/useQuery";


const Title = styled.h1`
  color: #000000;
  margin: 50px auto;
  text-transform: capitalize;
`;

const Image = styled.img`
  height:200px;
  margin: 50px auto;
`;

const displayFields = [
  {
    label: "Base Experience",
    path: "baseExperience",
  },
  {
    label: "Height",
    path: "height",
  },
  {
    label: "Weight",
    path: "weight",
  },
  {
    label: "IsDefault",
    path: "isDefault",
  },
  {
    label: "Types",
    path: "types",
  },
]


const PokemonDetail = ({ history, detail, isLoading, fetchPokemonDetail }) => {
  const query = useQuery();
  const id = query.get("id");

  useEffect(() => {
    fetchPokemonDetail(id);
  }, [id]);

  const { name, image } = detail

  return (
    <>
      {isLoading ?
        <Loader /> :
        <>
          <Title>{name}</Title>
          <Image src={image} alt={name} ></Image>
          <DetailTable
            fields={displayFields}
            item={detail}
          />
        </>
      }
      <button onClick={() => history.goBack()}>Back</button>

    </>
  );
};

const mapState = state => ({
  isLoading: state.loading.models.detail,
  detail: state.detail,
})

const mapDispatch = dispatch => ({
  fetchPokemonDetail: dispatch.detail.fetchPokemonDetail
})

export default connect(
  mapState,
  mapDispatch
)(PokemonDetail)