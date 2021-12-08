import styled from "styled-components";
import { Container } from "styles/globalStyles";
import { TABLET_SCREEN_1 } from "../../../styles/StylingEndPoints";

export const FooterWrapper = styled(Container)`
	padding: 100px 0;

	display: flex;
	justify-content: space-between;
	align-items: center;

	@media (max-width: ${TABLET_SCREEN_1}) {
		padding: 96px 0;
		flex-direction: column;
		gap: 4rem;
		justify-content: unset;
		align-items: unset;
	}
`;

export const FooterLogoTitle = styled.p`
	letter-spacing: 0.22em;
`;

export const FooterTop = styled.div`
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

export const FooterLinks = styled.div`
	display: flex;
	flex-direction: column;
	gap: 32px;

	a {
		color: white;
	}
`;

export const FooterSocialIcons = styled.div`
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
