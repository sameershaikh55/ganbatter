import Image from "next/image";
import { Container } from "styles/globalStyles";
import { CitiesCard, CitiesCards, Wrapper } from "./style";
import cityImg1 from "public/images/city-1.png";
import cityImg2 from "public/images/city-2.png";
import cityImg3 from "public/images/city-3.png";
import cityImg4 from "public/images/city-4.png";
import cityImg5 from "public/images/city-5.png";

const CityCard = (props) => {
	return (
		<CitiesCard>
			<Image src={props.img} alt="" />
			<p className="fs-24px purple weight-5">{props.title}</p>
		</CitiesCard>
	);
};

function Cities() {
	const data = [
		{
			t: "Kisumu",
			i: cityImg1,
		},
		{
			t: "Johannesburg",
			i: cityImg2,
		},
		{
			t: "Cape Town",
			i: cityImg3,
		},
		{
			t: "Nairobi",
			i: cityImg4,
		},
		{
			t: "And more cities!",
			i: cityImg5,
		},
	];

	return (
		<Wrapper>
			<Container>
				<h1 className="weight-3 gray mb-50px">
					Which cities are already on Ganbatte?
				</h1>

				<CitiesCards>
					{data.map((prev, i) => {
						return (
							<div key={i}>
								<CityCard title={prev.t} img={prev.i} />
							</div>
						);
					})}
				</CitiesCards>
			</Container>
		</Wrapper>
	);
}

export default Cities;
