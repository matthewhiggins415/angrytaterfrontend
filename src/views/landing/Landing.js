import React, { useState, useEffect } from 'react';
import { LandingContainer, HeroContainer, HeroTag, HeroBtn, InfoSection, ImgSection, ImgOne, ImgTwo, ImgThree, AnimatedButton } from './Landing.styles';
import WordChanger from '../../components/wordChanger/WordChanger';


const Landing = () => {
  const wordArr = ['sucky', 'sh*tty', 'lazy', 'greedy', 'pests', 'mean', 'lame', 'rude', 'selfish'];

  return (
    <>
      <LandingContainer>
        <HeroContainer>
          <HeroTag>Some people are <WordChanger words={wordArr}/> and they should know it.</HeroTag>
          <HeroBtn>send potato</HeroBtn>
        </HeroContainer>
      </LandingContainer>
      <InfoSection>
        <h1>Don't get mad, get even!</h1>
        <AnimatedButton>Customize your potato</AnimatedButton>
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