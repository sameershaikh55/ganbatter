import Image from "next/image";
import styled from "styled-components";
import { Container } from "styles/globalStyles";
import cityImg1 from "public/images/city-1.png";
import cityImg2 from "public/images/city-2.png";
import cityImg3 from "public/images/city-3.png";
import cityImg4 from "public/images/city-4.png";
import cityImg5 from "public/images/city-5.png";

const Wrapper = styled.div`
  padding: 170px 0;
  background-color: #f8f7f7;

  @media (max-width: 1000px) {
    padding: 50px 0;
  }
`;
const CitiesCards = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: space-between;
  text-align: center;
  gap: 24px;

  @media (max-width: 1000px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;
const CitiesCard = styled.div`
  max-width: 187px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;

  @media (max-width: 500px) {
    max-width: 100%;
    width: 100%;
  }

  img {
  }
`;

const CityCard = (props) => {
  return (
    <CitiesCard>
      <Image src={props.img} alt="" />
      <p className="fs-24px purple weight-5">{props.title}</p>
    </CitiesCard>
  );
};

function Cities() {
  return (
    <Wrapper>
      <Container>
        <h1 className="weight-3 gray mb-50px">
          Which cities are already on Ganbatte?
        </h1>

        <CitiesCards>
          <CityCard title="Kisumu" img={cityImg1} />
          <CityCard title="Johannesburg" img={cityImg2} />
          <CityCard title="Cape Town" img={cityImg3} />
          <CityCard title="Nairobi" img={cityImg4} />
          <CityCard title="And more cities!" img={cityImg5} />
        </CitiesCards>
      </Container>
    </Wrapper>
  );
}

export default Cities;
