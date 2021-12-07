import { Container } from "styles/globalStyles";
import { Wrapper, HeroBtn, HeroImg, HeroLeft, HeroWrapper } from "./style";
import heroImg from "public/images/hero-img.png";

function Hero() {
	return (
		<Wrapper>
			<Container>
				<HeroWrapper>
					<HeroLeft>
						<h1 className="weight-7 mb-10px">Ganbatte</h1>
						<p className="fs-28px gray weight-3 mb-60px">Explore. Scan. Act.</p>

						<p className="fs-28px gray weight-5 mb-30px">
							Join our community of pioneering cities, and make your city
							future-proof!
						</p>

						<HeroBtn className="fs-18px white weight-7 pointer mb-60px">
							Start your journey
						</HeroBtn>

						<p className="gray fs-16px weight-3">
							Ganbatte, Cities! makes it incredibly easy for city officials and
							change makers seeking to make their city sustainable to put a plan
							together, get stakeholders aligned and actually start doing.
						</p>
					</HeroLeft>

					<HeroImg src={heroImg} alt="hero-img" />
				</HeroWrapper>
			</Container>
		</Wrapper>
	);
}

export default Hero;
