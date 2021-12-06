import styled from "styled-components";
import { Container } from "styles/globalStyles";

const Wrapper = styled.div`
  height: 443px;
  background: url("/images/explore-bg.png");

  display: flex;
  align-items: center;

  @media (max-width: 500px) {
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

const ContentWrapper = styled.div`
  max-width: 503.57px;
  width: 100%;

  @media (max-width: 500px) {
    text-align: center;
  }

  button {
    padding: 1rem 2rem;
    background: #fdbd57;
    box-shadow: 0px 5px 20px -10px rgba(38, 50, 56, 0.2);
    border-radius: 4px;
    color: #4a114a;
  }
`;

function Explore() {
  return (
    <Wrapper>
      <Container>
        <ContentWrapper>
          <p className="fs-36px white weight-3 mb-30px">
            All the solutions to resolve our climate challenges already exist.
          </p>

          <button className="fs-18px weight-7 pointer">Explore my city</button>
        </ContentWrapper>
      </Container>
    </Wrapper>
  );
}

export default Explore;
