import React, { useEffect } from 'react';
import { LandingContainer, HeroContainer, HeroTag, HeroBtn, InfoSection, ImgSection, ImgOne, ImgTwo, ImgThree, AnimatedButton, PotatoBoxSection, PotatoMemeSection, Span } from './Landing.styles';
import WordChanger from '../../components/wordChanger/WordChanger';
import { useNavigate } from "react-router-dom";

const Landing = ({ user }) => {
  const navigate = useNavigate();

  const wordArr = ['sucky', 'sh*tty', 'lazy', 'greedy', 'pests', 'mean', 'lame', 'dumb', 'cruel', 'rude', 'selfish'];

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  return (
    <>
      <LandingContainer>
        <HeroContainer>
          <HeroTag>Some people are <WordChanger words={wordArr}/> and they should know it.</HeroTag>
        </HeroContainer>
      </LandingContainer>
      <AnimatedButton onClick={() => navigate("/order")}>Customize your potato $20</AnimatedButton>
      <InfoSection>
        <h1>
         Anonymous? <Span>Yes.</Span> <br />
         Is this dumb? <Span>Absolutely.</Span> <br />
         Solve ur problems? <Span>No.</Span> <br />
         Confuse ur foes? <Span>100%.</Span> </h1>
        <PotatoBoxSection>
        </PotatoBoxSection>
        {/* <AnimatedButton onClick={() => navigate("/order")}>Customize your potato $20</AnimatedButton> */}
      </InfoSection>
      <ImgSection>
        <ImgOne></ImgOne>
        <ImgTwo></ImgTwo>
        <ImgThree></ImgThree>
      </ImgSection>
      <PotatoMemeSection></PotatoMemeSection>
    </>
  )
}

export default Landing