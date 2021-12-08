import { Container } from "styles/globalStyles";
import { Wrapper, PartnersImages } from "./Partners.style";
import partnerImg1 from "public/images/partner-1.png";
import partnerImg2 from "public/images/partner-2.png";
import partnerImg3 from "public/images/partner-3.png";
import partnerImg4 from "public/images/partner-4.png";
import partnerImg5 from "public/images/partner-5.png";
import partnerImg6 from "public/images/partner-6.png";
import partnerImg7 from "public/images/partner-7.png";
import partnerImg8 from "public/images/partner-8.png";
import partnerImg9 from "public/images/partner-9.png";
import partnerImg10 from "public/images/partner-10.png";
import partnerImg11 from "public/images/partner-11.png";
import Image from "next/image";

function Partners() {
	const partnersImages1 = [
		partnerImg1,
		partnerImg2,
		partnerImg3,
		partnerImg4,
		partnerImg5,
		partnerImg6,
		partnerImg7,
	];

	const partnersImages2 = [
		partnerImg8,
		partnerImg9,
		partnerImg10,
		partnerImg11,
	];

	return (
		<Container>
			<Wrapper>
				<p className="fs-36px gray weight-3 mb-64px">Partners we work with</p>
				<p className="fs-20px light-purple weight-5 mb-64px">
					Knowledge partners:
				</p>

				<PartnersImages className="mb-60px">
					{partnersImages1.map((prev, i) => {
						return (
							<div key={i}>
								<Image src={prev} alt="" />
							</div>
						);
					})}
				</PartnersImages>

				<p className="fs-20px light-purple weight-5 mb-30px">
					Ganbatte is supported by:
				</p>

				<PartnersImages className="mb-60px">
					{partnersImages2.map((prev, i) => {
						return (
							<div key={i}>
								<Image src={prev} alt="" />
							</div>
						);
					})}
				</PartnersImages>
			</Wrapper>
		</Container>
	);
}

export default Partners;
