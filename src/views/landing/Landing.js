import React, { useState, useEffect } from 'react';
import { LandingContainer, HeroContainer, HeroTag, HeroBtn, InfoSection, ImgSection, ImgOne, ImgTwo, ImgThree, AnimatedButton } from './Landing.styles';
import WordChanger from '../../components/wordChanger/WordChanger';
import { useNavigate } from "react-router-dom";

const Landing = ({ user }) => {
  const navigate = useNavigate();

  const wordArr = ['sucky', 'sh*tty', 'lazy', 'greedy', 'pests', 'mean', 'lame', 'dumb', 'cruel', 'rude', 'selfish'];

  return (
    <>
      <LandingContainer>
        <HeroContainer>
          <HeroTag>Some people are <WordChanger words={wordArr}/> and they should be f*cked with.</HeroTag>
          <HeroBtn onClick={() => navigate("/order")}>send potato $20</HeroBtn>
        </HeroContainer>
      </LandingContainer>
      <InfoSection>
        <h1>Is this dumb? Yes. Does this make me feel better? Kinda. </h1>
        <AnimatedButton onClick={() => navigate("/order")}>Customize your potato $20</AnimatedButton>
      </InfoSection>
      <ImgSection>
        <ImgOne></ImgOne>
        <ImgTwo></ImgTwo>
        <ImgThree></ImgThree>
      </ImgSection>
    </>
  )
}

export default Landing