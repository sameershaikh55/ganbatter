import styled from "styled-components";
import { Container } from "styles/globalStyles";

const Wrapper = styled.div`
  padding: 100px 0;
  background: #f8f7f7;

  @media (max-width: 760px) {
    padding: 50px 0;
  }
`;
const TrustCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 62px;

  @media (max-width: 760px) {
    gap: 42px;
  }
`;
const TrustCard = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  max-width: 636px;
`;

const Circle = styled.div`
  width: 30px;
  height: 30px;
  background: ${(props) => props.bgColor};
  border-radius: 50%;
`;

function Trust() {
  return (
    <Wrapper>
      <Container>
        <p className="fs-36px weight-4 gray mb-40px">Why trust us?</p>

        <TrustCards>
          <TrustCard>
            <div>
              <Circle
                className="circle"
                bgColor="rgba(243, 138, 42, 1)"
              ></Circle>
            </div>
            <div>
              <p className="fs-20px gray weight-4">
                Ganbatte is based on{" "}
                <span className="weight-6">10 years of research</span>, with
                which we have developed actionable solutions backed by evidence.
              </p>
            </div>
          </TrustCard>
          <TrustCard>
            <div>
              <Circle
                className="circle"
                bgColor="rgba(124, 15, 77, 1)"
              ></Circle>
            </div>
            <div>
              <p className="fs-20px gray weight-4">
                Ganbatte keeps collecting{" "}
                <span className="weight-6"> data from around the world</span>,
                and makes it easily accessible to you.
              </p>
            </div>
          </TrustCard>
          <TrustCard>
            <div>
              <Circle
                className="circle"
                bgColor="rgba(210, 55, 50, 1)"
              ></Circle>
            </div>
            <div>
              <p className="fs-20px gray weight-4">
                Ganbatte is{" "}
                <span className="weight-6">
                  {" "}
                  developed hand-in-hand with users
                </span>{" "}
                and partners to co-create the best possible features.
              </p>
            </div>
          </TrustCard>
        </TrustCards>
      </Container>
    </Wrapper>
  );
}

export default Trust;
