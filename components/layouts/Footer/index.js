import poweredByImg from "public/images/powered-by.png";
import Image from "next/image";
import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaMediumM } from "react-icons/fa";
import {
	FooterLinks,
	FooterLogoTitle,
	FooterSocialIcons,
	FooterTop,
	FooterWrapper,
} from "./Footer.style";

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
					<a href="/">
						<AiFillInstagram />
					</a>
					<a href="/">
						<FaLinkedinIn />
					</a>
					<a href="/">
						<FaMediumM />
					</a>
				</FooterSocialIcons>
			</FooterWrapper>
		</div>
	);
}

export default Footer;
