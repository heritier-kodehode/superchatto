import React from 'react';
import styled from 'styled-components';

const SpinnerContainer = styled.div``;
const LoadingSpinner = styled.div``;

function Spinner() {
  return (
    <SpinnerContainer>
      <LoadingSpinner></LoadingSpinner>
    </SpinnerContainer>
  );
}

export default Spinner;
