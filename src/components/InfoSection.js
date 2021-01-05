import React from "react";
import styled from "styled-components";
import Button from "./Button";

const Section = styled.section``;

const Container = styled.div``;
const ColumnLeft = styled.div``;
const Columnright = styled.div``;

const InfoSection = () => {
  return (
    <Section>
      <Container>
        <ColumnLeft>
          <h1>heading</h1>
          <p>paragraph</p>
          <p>paragraph</p>
          <Button to="/homes">label</Button>
        </ColumnLeft>
        <Columnright>
          <img src="" alt="home" />
        </Columnright>
      </Container>
    </Section>
  );
};

export default InfoSection;
