import styled from "styled-components";
import { Container } from "styles/globalStyles";
import sectionImg1 from "public/images/section-img-1.png";
import sectionImg2 from "public/images/section-img-2.png";
import sectionImg3 from "public/images/section-img-3.png";
import Image from "next/image";

const ContainerWrapper = styled.div`
  padding: 100px 0;

  @media (max-width: 500px) {
    padding: 50px 0;
  }
`;
const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5rem;
  margin-bottom: 100px;

  flex-direction: ${(props) =>
    props.reverse === "true" ? "row-reverse" : "row"};

  @media (max-width: 950px) {
    flex-direction: column;
    justify-content: unset;
    align-items: unset;
    gap: 1.5rem;
    margin-bottom: 50px;
  }
`;
const SectionRight = styled.div`
  flex: 1;
  max-width: 438px;

  @media (max-width: 950px) {
    max-width: 100%;
  }
`;
const SectionImage = styled.div`
  min-width: 500px;

  @media (max-width: 1200px) {
    min-width: auto;
  }
`;
const SectionTitle = styled.div`
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -40px;
    width: 18.9px;
    height: 18.9px;
    background-color: ${(props) => props.circleColor};
    border-radius: 50%;

    @media (max-width: 950px) {
      display: none;
    }
  }
`;

const SideBySideSection = ({
  title,
  subtitle,
  img,
  circleColor,
  reverse = "false",
}) => {
  return (
    <Section reverse={reverse}>
      <SectionImage>
        <Image src={img} alt="" />
      </SectionImage>
      <SectionRight>
        <SectionTitle circleColor={circleColor}>
          <p className="fs-30px light-purple weight-6 mb-15px">{title}</p>
        </SectionTitle>
        <p className="fs-20px gray weight-4">{subtitle}</p>
      </SectionRight>
    </Section>
  );
};

function Abilities() {
  return (
    <ContainerWrapper>
      <Container>
        <p className="fs-36px weight-3 gray mb-100px">
          With Ganbatte, you can:
        </p>

        <SideBySideSection
          title="Explore"
          subtitle="Ganbatte provides key metrics, case studies and solutions related to your city. Making it easy for you to browse solutions and find where you can move the needle in your city and turn it from a linear economy, to a circular one - benefiting the environment, jobs, and its inhabitants."
          img={sectionImg1}
          circleColor="#f38a2a"
        />
        <SideBySideSection
          title="Scan"
          subtitle="Scanning to find specific solutions for your city can be done by analyzing your progress towards circularity, benchmarking with other cities and listing all the businesses and initiatives in your city, to accelerate the transition towards a fully circular city.  "
          img={sectionImg2}
          circleColor="#7C0F4D"
          reverse="true"
        />
        <SideBySideSection
          title="Act"
          subtitle="Ganbatte connects cities, nations and businesses with similar profiles to transition faster. Having explored and scanned, you can pitch your roadmaps towards circularity, and get them funded and approved!"
          img={sectionImg3}
          circleColor="#D23732"
        />
      </Container>
    </ContainerWrapper>
  );
}

export default Abilities;
