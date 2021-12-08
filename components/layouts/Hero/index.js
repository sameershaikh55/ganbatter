import { Container } from "styles/globalStyles";
import { Wrapper, HeroBtn, HeroImg, HeroLeft, HeroWrapper } from "./Hero.style";
import heroImg from "public/images/hero-img.png";

function Hero() {
	return (
		<Wrapper>
			<Container>
				<HeroWrapper>
					<HeroLeft>
						<h1 className="weight-7 mb-10px">Ganbatte</h1>
						<p className="fs-28px gray weight-3 mb-60px">Explore. Scan. Act.</p>

						<p className="ps-2 fs-28px gray weight-5 mt-64px mb-32px">
							Join our community of pioneering cities, and make your city
							future-proof!
							
						</p>

						<HeroBtn className="fs-18px white weight-7 pointer">
							Start your journey
						</HeroBtn>

						<p className="gray fs-16px mt-64px weight-3">
							Ganbatte, Cities! makes it incredibly easy for city officials and
							change makers seeking to make their city sustainable to put a plan
							together, get stakeholders aligned and actually start doing.
						</p>
					</HeroLeft>

					<div className="mb-64px">
						<HeroImg src={heroImg} alt="hero-img" />
					</div>
				</HeroWrapper>
			</Container>
		</Wrapper>
	);
}

export default Hero;
