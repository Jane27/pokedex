import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Button = styled.button`
  color: ${(props) => (props.active ? "#fff" : "#000")};
  background-color: ${(props) => (props.active ? "blue" : "#fff")};
  margin-right:5px;
`;

const Pagination = ({
  total,
  currentPage,
  onPageChange,
}) => {
  const setNextPage = (nextPage) => {
    onPageChange(nextPage);
  };

  const renderSerial = (totalPages) => {
    const buttonGroup = [];

    for (let i = 0; i < totalPages; i++) {
      buttonGroup.push(
        <Button key={i} active={i === currentPage - 1} onClick={() => setNextPage(i)}>
          {i + 1}
        </Button>
      );
    }
    return buttonGroup;
  };

  return (
    <Container>
      <button
        disabled={currentPage === 1}
        onClick={() => setNextPage(currentPage - 1)}
      >
        Previous
      </button>
      {renderSerial(total)}
      <button
        disabled={currentPage === total}
        onClick={() => setNextPage(currentPage + 1)}
      >
        Next
      </button>
    </Container>
  );
};

export default Pagination;
