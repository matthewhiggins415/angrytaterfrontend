import React, { useState, useEffect } from "react";
import { P, CarouselContainer, Stars } from './Carousel.styles';

const reviews = [
    {
      message: "Sent one to my grandson for his 21st birthday. He called me right away. Said it was the 'weirdest and best' gift he'd ever received!",
      author: "— Margaret"
    },
    {
      message: "I sent one to my neighbor after her hip surgery that said ‘This spud’s rooting for you!’ She called me laughing. Way better than flowers!",
      author: "— Henry"
    },
    {
      message: "I sent one to my friend Edna that just said, ‘Call me, you old prune.’ haha 😂",
      author: "— Joanne"
    },
    {
      message: "Sent one to my little sister as a graduation present ‘Congratulations.. Here's a potato’. Nailed it.",
      author: "— Matt"
    },
    {
      message: "My ex was annoying me so I sent a spite potato. Petty and funny haha",
      author: "— Sophie"
    },
    {
      message: "Wasn't sure what to get my dad who has everything he wants already. Spent the money on a potato that said ‘You’re old now.’ Worth every cent.",
      author: "— Emily"
    }
  ];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 4500); // 2.5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <CarouselContainer style={{ position: "relative", width: "300px", height: "200px", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "1rem" }}>
      <P>{reviews[index].message}</P>
      <P style={{ fontWeight: "normal", marginTop: "0.5rem" }}>{reviews[index].author}</P>
      <Stars>★★★★★</Stars>
    </CarouselContainer>
  );
};

export default Carousel;