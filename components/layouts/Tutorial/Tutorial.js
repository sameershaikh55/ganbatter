import styled from "styled-components";
import { Container } from "styles/globalStyles";

const Wrapper = styled.div`
  max-width: 636.81px;
  margin-bottom: 150px;
`;
const TutorialRoadmap = styled.div`
  & > div {
    /* min-height: 80px; */

    & .line {
      content: "";
      position: absolute;
      height: 100%;
      width: 0;
      /* border: 4px dashed red; */
      left: 18px;

      background: linear-gradient(
        rgba(253, 189, 87, 1) 60%,
        rgba(255, 255, 255, 0) 0%
      );
      background-position: right;
      background-size: 100% 16px;
      background-repeat: repeat-y;

      width: 5px;
      z-index: -1;
    }
  }
`;
const TutorialCard = styled.div`
  position: relative;

  padding-bottom: 2rem;

  &:last-child {
    padding-bottom: 0rem;
  }

  & > div {
    display: flex;
    align-items: center;
    gap: 22px;
  }

  .box {
    width: 40.43px;
    height: 40.43px;
    border-radius: 50%;
    font-size: 24px;
    color: white;
    font-weight: 500;

    display: flex;
    justify-content: center;
    align-items: center;

    background: ${(props) => props.boxBg};
  }
`;

const TutRoadmap = ({ boxBg, dashedColor, title, index }) => {
  return (
    <TutorialCard boxBg={boxBg}>
      <div className="line" dashedColor={dashedColor}></div>
      <div>
        <div>
          <div className="box">{index}</div>
        </div>
        <div>
          <p className="fs-20px gray weight-4">{title}</p>
        </div>
      </div>
    </TutorialCard>
  );
};

function Tutorial() {
  return (
    <Container>
      <Wrapper>
        <p className="fs-36px gray weight-3  mb-25px">How does it work?</p>
        <p className="fs-16px gray weight-3 mb-45px">
          Ganbatte, Cities! enables cities to tackle the most crucial
          sustainability challenges. We help city officials & other changemakers
          identify proven solutions to help tackle climate challenges, learn and
          compare with peers around the world, and help cities become
          future-proof. Together, we’ll accelerate the transition to a safe and
          just world for all.{" "}
        </p>

        <TutorialRoadmap>
          <TutRoadmap
            index="1"
            title="Find your city"
            dashedColor="linear-gradient(
        rgba(253, 189, 87, 1) 60%,
        rgba(255, 255, 255, 0) 0%)"
            boxBg="linear-gradient(270deg, #FDBD57 0%, #F38A2A 0.01%, #EC6032 100%)"
          />
          <TutRoadmap
            index="2"
            title="Explore what the biggest emissions, materials flows and jobs potential is for your city"
            dashedColor="linear-gradient(
        rgba(253, 189, 87, 1) 60%,
        rgba(255, 255, 255, 0) 0%
      )"
            boxBg="linear-gradient(270deg, #EC6032 0%, #AB2A26 100%);"
          />
          <TutRoadmap
            index="3"
            title="Select a sector to narrow in to"
            dashedColor="linear-gradient(
        rgba(253, 189, 87, 1) 60%,
        rgba(255, 255, 255, 0) 0%
      )"
            boxBg=" linear-gradient(270deg, #C21B3B 0%, #950A3D 100%)"
          />
          <TutRoadmap
            index="4"
            title="Learn from case studies of circular solutions implemented all over the world"
            dashedColor="linear-gradient(
        rgba(253, 189, 87, 1) 60%,
        rgba(255, 255, 255, 0) 0%
      )"
            boxBg="linear-gradient(270deg, #7C0F4D 0%, #5C0C40 100%)"
          />
          <TutRoadmap
            index="5"
            title="Find out where you are on your journey towards circularity, and what cities to learn from"
            dashedColor="linear-gradient(
        rgba(253, 189, 87, 1) 60%,
        rgba(255, 255, 255, 0) 0%
      )"
            boxBg="linear-gradient(270deg, #763D8E 0%, #4A114A 100%)"
          />
        </TutorialRoadmap>
      </Wrapper>
    </Container>
  );
}

export default Tutorial;
