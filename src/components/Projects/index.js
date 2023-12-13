import { useState } from 'react';
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
`;

const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1100px;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;}
`;

const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
margin-top: 12px;
      font-size: 32px;
  }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

const ToggleGroup = styled.div`
    display: flex;
    border: 1.5px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
    font-size: 16px;
    border-radius: 12px;
    font-weight: 500;
    margin: 22px 0px;
    @media (max-width: 768px) {
        font-size: 12px;
    }
`;

const ToggleButton = styled.div`
    padding: 8px 18px;
    border-radius: 6px;
    cursor: pointer;
    ${({ active, theme }) =>
        active && `
    background: ${theme.primary + 20};
    `
    }
    &:hover {
        background: ${({ theme }) => theme.primary + 8};
    }
    @media (max-width: 768px) {
        padding: 6px 8px;
        border-radius: 4px;
    }
`;

const Divider = styled.div`
    width: 1.5px;
    background: ${({ theme }) => theme.primary};
`


const Projects = () => {
const [toggle, setToggle] = useState("all");
  return (
    <Container id="projects">
        <Wrapper>
            <Title>Projects</Title>
            <Desc>I have worked on some wide range of Projects.From Development to Data Engineering , Here are some of my Projects.</Desc>
        </Wrapper>
        <ToggleGroup>
            {toggle == "all" ? (
                <ToggleButton active value="all">All</ToggleButton>
            ) : (
                <ToggleButton active value="all">All</ToggleButton>
            )}
            <Divider /> 
            <ToggleButton>Data Engineering</ToggleButton>
            <Divider />
            <ToggleButton>Data Analytics</ToggleButton>
            <Divider />
            <ToggleButton>Web</ToggleButton>
            <Divider />
        </ToggleGroup>
    </Container>
  )
}

export default Projects