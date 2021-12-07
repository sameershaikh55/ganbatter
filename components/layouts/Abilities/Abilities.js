import { Container } from "styles/globalStyles";
import {
	ContainerWrapper,
	Section,
	SectionImage,
	SectionRight,
	SectionTitle,
} from "./style";
import sectionImg1 from "public/images/section-img-1.png";
import sectionImg2 from "public/images/section-img-2.png";
import sectionImg3 from "public/images/section-img-3.png";
import Image from "next/image";

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
	const data = [
		{
			title: "Explore",
			subtitle:
				"Ganbatte provides key metrics, case studies and solutions related to your city. Making it easy for you to browse solutions and find where you can move the needle in your city and turn it from a linear economy, to a circular one - benefiting the environment, jobs, and its inhabitants.",
			img: sectionImg1,
			circleColor: "#f38a2a",
		},
		{
			title: "Scan",
			subtitle:
				"Scanning to find specific solutions for your city can be done by analyzing your progress towards circularity, benchmarking with other cities and listing all the businesses and initiatives in your city, to accelerate the transition towards a fully circular city.",
			img: sectionImg2,
			circleColor: "#7C0F4D",
			reverse: "true",
		},
		{
			title: "Act",
			subtitle:
				"Ganbatte connects cities, nations and businesses with similar profiles to transition faster. Having explored and scanned, you can pitch your roadmaps towards circularity, and get them funded and approved!",
			img: sectionImg3,
			circleColor: "#D23732",
		},
	];

	return (
		<ContainerWrapper>
			<Container>
				<p className="fs-36px weight-3 gray mb-100px">
					With Ganbatte, you can:
				</p>

				{/* MAP METHOD */}
				{data.map((prev, i) => {
					const { circleColor, img, subtitle, title, reverse } = prev;
					return (
						<div key={i}>
							<SideBySideSection
								title={title}
								subtitle={subtitle}
								img={img}
								circleColor={circleColor}
								reverse={reverse}
							/>
						</div>
					);
				})}
			</Container>
		</ContainerWrapper>
	);
}

export default Abilities;
