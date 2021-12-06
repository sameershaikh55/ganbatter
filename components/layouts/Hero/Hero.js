import styled from "styled-components";
import { Container } from "styles/globalStyles";
import heroImg from "public/images/hero-img.png";
import Image from "next/image";
import heroBg from "public/images/hero-bg.png";

const Wrapper = styled.div`
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: url("images/hero-bg.png");
  }
`;
const HeroWrapper = styled.div`
  padding: 60px 0;
  height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  gap: 90px;

  @media (max-width: 1000px) {
    padding: 30px 0;
    height: auto;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: unset;
    align-items: unset;
  }
`;
const HeroLeft = styled.div`
  max-width: 281px;
  width: 100%;

  @media (max-width: 800px) {
    max-width: 100%;
  }
`;
const HeroBtn = styled.button`
  background: #d23732;
  box-shadow: 0px 5px 20px -10px rgba(38, 50, 56, 0.2);
  border-radius: 4px;
  padding: 1rem 2rem;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

const HeroImg = styled(Image)``;

function Hero() {
  return (
    <Wrapper>
      <Container>
        {/* <HeroBgImg src={heroBg} objectFit="contain" alt="" /> */}
        <HeroWrapper>
          <HeroLeft>
            <h1 className="weight-7 mb-10px">Ganbatte</h1>
            <p className="fs-28px gray weight-3 mb-60px">Explore. Scan. Act.</p>

            <p className="fs-28px gray weight-5 mb-30px">
              Join our community of pioneering cities, and make your city
              future-proof!
            </p>

            <HeroBtn className="fs-18px white weight-7 pointer mb-60px">
              Start your journey
            </HeroBtn>

            <p className="gray fs-16px weight-3">
              Ganbatte, Cities! makes it incredibly easy for city officials and
              change makers seeking to make their city sustainable to put a plan
              together, get stakeholders aligned and actually start doing.
            </p>
          </HeroLeft>

          <HeroImg src={heroImg} alt="hero-img" />
        </HeroWrapper>
      </Container>
    </Wrapper>
  );
}

export default Hero;
