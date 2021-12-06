import styled from "styled-components";
import { Container } from "styles/globalStyles";
import tryImg from "../../../public/images/try-bg.png";

const Wrapper = styled.div`
  height: 438px;
  background: url("/images/try-bg.png");
  display: flex;
  align-items: center;

  margin-bottom: 200px;
`;
const Content = styled.div`
  max-width: 505px;
  /* height: 259px; */
  background-color: white;
  border-radius: 10px;
  padding: 2rem;

  @media (max-width: 760px) {
    max-width: 100%;
    text-align: center;

    > p {
      margin-bottom: 1.5rem;
    }
  }

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 760px) {
      flex-direction: column;
      gap: 1.5rem;
    }

    & button {
      background-color: rgba(210, 55, 50, 1);
      padding: 1.1rem 2.5rem;
      box-shadow: 0px 5px 20px -10px rgba(38, 50, 56, 0.2);
      border-radius: 4px;
    }
  }
`;

function Try() {
  return (
    <Wrapper>
      <Container>
        <Content>
          <p className="fs-28px gray weight-4 mb-25px">
            Want to make your city more circular, but not sure where to start?
          </p>

          <div>
            <p className="fs-20px weight-3">Ganbatte will help you.</p>
            <button className="fs-18px white weight-6 pointer">
              Try it now
            </button>
          </div>
        </Content>
      </Container>
    </Wrapper>
  );
}

export default Try;
