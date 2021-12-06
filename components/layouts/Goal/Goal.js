import styled from "styled-components";
import { Container } from "styles/globalStyles";
import goalImg1 from "public/images/goal-img-1.png";
import goalImg2 from "public/images/goal-img-2.png";
import Image from "next/image";

const Wrapper = styled.div`
  padding: 100px 0;
`;
const GoalImages = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 760px) {
    flex-direction: column;
    gap: 2rem;
  }

  & > div {
    position: relative;
    @media (max-width: 760px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }
  }

  & > div:nth-child(1) p {
    position: absolute;
    top: 10%;
    left: 78%;
    width: 312.44px;

    @media (max-width: 760px) {
      width: 100%;
      position: static;
    }
  }

  & > div:nth-child(2) p {
    position: absolute;
    top: 50%;
    right: 85%;
    width: 312.44px;
    text-align: right;
    @media (max-width: 760px) {
      width: 100%;
      position: static;
      text-align: left;
    }
  }

  & > div:nth-child(2) {
    margin-top: 200px;
    @media (max-width: 760px) {
      margin-top: 0;
    }
  }
`;

function Goal() {
  return (
    <Container>
      <Wrapper>
        <p className="fs-36px gray weight-3 mb-100px">
          What do we want to achieve with Ganbatte?
        </p>

        <GoalImages>
          <div>
            <Image src={goalImg1} alt="" />

            <p className="fs-28px weight-7 gray">
              Circular Cities that can <span className="purple">thrive</span>{" "}
              within planetary boundaries
            </p>
          </div>
          <div>
            <Image src={goalImg2} alt="" />
            <p className="fs-28px weight-7 gray">
              Doubling circularity by 2032 with the power of{" "}
              <span className="purple">data</span>
            </p>
          </div>
        </GoalImages>
      </Wrapper>
    </Container>
  );
}

export default Goal;
