import React, { useState, useEffect } from 'react';
import { LandingContainer, HeroContainer, HeroTag, HeroBtn, InfoSection, ImgSection, ImgOne, ImgTwo, ImgThree } from './Landing.styles';
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
        <div>
          <h1>Add a custom message to your potato</h1>
          <button>Customize your potato</button>
        </div>
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