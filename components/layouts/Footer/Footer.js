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
} from "./style";

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
