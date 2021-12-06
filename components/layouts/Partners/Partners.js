import styled from "styled-components";
import { Container } from "styles/globalStyles";
import partnerImg1 from "public/images/partner-1.png";
import partnerImg2 from "public/images/partner-2.png";
import partnerImg3 from "public/images/partner-3.png";
import partnerImg4 from "public/images/partner-4.png";
import partnerImg5 from "public/images/partner-5.png";
import partnerImg6 from "public/images/partner-6.png";
import partnerImg7 from "public/images/partner-7.png";
import partnerImg8 from "public/images/partner-8.png";
import partnerImg9 from "public/images/partner-9.png";
import partnerImg10 from "public/images/partner-10.png";
import partnerImg11 from "public/images/partner-11.png";
import Image from "next/image";

const Wrapper = styled.div`
  padding: 100px 0;

  @media (max-width: 760px) {
    padding: 40px 0;
  }
`;
const PartnersImages = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 60px;
`;

function Partners() {
  return (
    <Container>
      <Wrapper>
        <p className="fs-36px gray weight-3 mb-60px">Partners we work with</p>
        <p className="fs-20px light-purple weight-5 mb-30px">
          Knowledge partners:
        </p>

        <PartnersImages className="mb-60px">
          <Image src={partnerImg1} alt="" />
          <Image src={partnerImg2} alt="" />
          <Image src={partnerImg3} alt="" />
          <Image src={partnerImg4} alt="" />
          <Image src={partnerImg5} alt="" />
          <Image src={partnerImg6} alt="" />
          <Image src={partnerImg7} alt="" />
        </PartnersImages>

        <p className="fs-20px light-purple weight-5 mb-30px">
          Ganbatte is supported by:
        </p>

        <PartnersImages className="mb-60px">
          <Image src={partnerImg8} alt="" />
          <Image src={partnerImg9} alt="" />
          <Image src={partnerImg10} alt="" />
          <Image src={partnerImg11} alt="" />
        </PartnersImages>
      </Wrapper>
    </Container>
  );
}

export default Partners;
