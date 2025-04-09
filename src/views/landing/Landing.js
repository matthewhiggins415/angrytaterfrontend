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
          {/* <HeroTag>Some people are <WordChanger words={wordArr}/> and they should know it.</HeroTag> */}
          <HeroTag>Because some messages are better sent with a root vegetable.</HeroTag>
        </HeroContainer>
        {/* <AnimatedButton onClick={() => navigate("/order")}>Customize your potato $20</AnimatedButton> */}
      </LandingContainer>
      <InfoSection>
        <AnimatedButton onClick={() => navigate("/order")}>Customize your potato $20</AnimatedButton>
        <PotatoBoxSection>
        </PotatoBoxSection>
        <h1>
         Anonymous? <Span>If you want.</Span> <br/>
         Who doesn't want a potato in the mail?! <br />
         For friends or foes, they won't expect it!
        </h1>
      </InfoSection>
      <ImgSection>
        <ImgOne></ImgOne>
        <ImgTwo></ImgTwo>
        <ImgThree></ImgThree>
      </ImgSection>
      <AnimatedButton onClick={() => navigate("/order")}>Customize your potato $20</AnimatedButton>
      <PotatoMemeSection></PotatoMemeSection>
    </>
  )
}

export default Landing