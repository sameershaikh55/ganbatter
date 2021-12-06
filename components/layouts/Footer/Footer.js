import styled from "styled-components";
import { Container } from "styles/globalStyles";
import poweredByImg from "public/images/powered-by.png";
import Image from "next/image";
import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaMediumM } from "react-icons/fa";

const FooterWrapper = styled(Container)`
	padding: 100px 0;

	display: flex;
	justify-content: space-between;
	align-items: center;

	@media (max-width: 760px) {
		padding: 50px 0;
		flex-direction: column;
		gap: 4rem;
		justify-content: unset;
		align-items: unset;
	}
`;

const FooterLogoTitle = styled.p`
	letter-spacing: 0.22em;
`;

const FooterTop = styled.div`
	height: 140px;
	background: #4a114a;
	position: relative;

	&::after {
		content: "";
		position: absolute;
		top: 0%;
		left: 0;
		width: 100%;
		height: 100%;
		background: url("/images/hero-bg.png");
		z-index: 1000;
		background-position: center center;
	}
`;

const FooterLinks = styled.div`
	display: flex;
	flex-direction: column;
	gap: 24px;

	a {
		color: white;
	}
`;

const FooterSocialIcons = styled.div`
	display: flex;
	align-items: center;
	gap: 40px;

	a {
		width: 48px;
		height: 48px;
		border: 2px solid #ffffff;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		color: white;
		font-size: 1.6rem;
	}
`;

function Footer() {
	return (
		<div className="bg-purple">
			<FooterTop />
			<FooterWrapper>
				<div>
					<FooterLogoTitle className="fs-24px white weight-7 mb-20px">
						GANBATTE
					</FooterLogoTitle>
					<Image src={poweredByImg} alt="" />
				</div>

				<FooterLinks>
					<Link href="/" className="fs-14px white weight-4">
						Terms & Privacy
					</Link>
					<Link href="/" className="fs-14px white weight-4">
						Contact Us
					</Link>
					<Link href="/" className="fs-14px white weight-4">
						Product Page
					</Link>
				</FooterLinks>

				<FooterSocialIcons>
					<Link href="/" passHref>
						<AiFillInstagram />
					</Link>
					<Link href="/" passHref>
						<FaLinkedinIn />
					</Link>
					<Link href="/" passHref>
						<FaMediumM />
					</Link>
				</FooterSocialIcons>
			</FooterWrapper>
		</div>
	);
}

export default Footer;
