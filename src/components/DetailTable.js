import React from "react";
import styled from "styled-components";
import get from "lodash/get";

const Content = styled.h4`
  display:flex;
  flex-direction: column;
  align-items: flex-start;
  margin:0 auto;
  width:80%;
  margin-bottom:50px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const Cell = styled.div`
  display: flex;
  height: 45px;
  background-color: white;
  color: black;
  font-size: 14px;
  border: 1px solid black;
  width: 80%;
`;

export const Text = styled.p`
  margin: auto;
  text-align: center;
`;

const DetailTable = ({ fields, item }) => {

  return (
    <Content>
      {fields.map(({ label, path }, idx) => {
        const value = Array.isArray(get(item, path, "")) ? get(item, path, "").toString() : get(item, path, "");
        return (
          <Row key={idx}>
            <Cell>
              <Text>{label}</Text>
            </Cell>
            <Cell >
              <Text>{value}</Text>
            </Cell>
          </Row>
        );
      })}
    </Content>
  );
};

export default DetailTable;
