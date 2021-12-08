import { Container } from "styles/globalStyles";
import { CitiesCard, CitiesCards, Wrapper } from "./Cities.style";

const CityCard = ({ img, title }) => {
	return (
		<CitiesCard>
			{/* <Image src={props.img} alt="" layout="responsive" /> */}
			<img src={img} alt="" />
			<p className="fs-24px purple weight-5">{title}</p>
		</CitiesCard>
	);
};

function Cities() {
	const citiesData = [
		{
			t: "Kisumu",
			i: "images/city-1.png",
		},
		{
			t: "Johannesburg",
			i: "images/city-2.png",
		},
		{
			t: "Cape Town",
			i: "images/city-3.png",
		},
		{
			t: "Nairobi",
			i: "images/city-4.png",
		},
		{
			t: "And more cities!",
			i: "images/city-5.png",
		},
	];

	return (
		<Wrapper>
			<Container>
				<h1 className="weight-3 gray mb-64px">
					Which cities are already on Ganbatte?
				</h1>

				<CitiesCards>
					{citiesData.map((prev, i) => {
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
