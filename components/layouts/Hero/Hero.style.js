import styled from "styled-components";
import Image from "next/image";
import heroBg from "public/images/hero-bg.png";
import {
	MOBILE_SCREEN_1,
	DESKTOP_SCREEN_1,
} from "../../../styles/StylingEndPoints";

export const Wrapper = styled.div`
	position: relative;
	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
		background: url("images/hero-bg.png");

		@media (max-width: ${MOBILE_SCREEN_1}) {
			content: "";
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: -1;
			background: transparent;
		}
	}
`;
export const HeroWrapper = styled.div`
	padding: 60px 0;
	height: calc(100vh - 70px);
	display: flex;
	align-items: center;
	/* justify-content: space-between; */
	gap: 90px;

	@media (max-width: ${DESKTOP_SCREEN_1}) {
		padding: 48px 0;
		height: auto;
	}

	@media (max-width: ${DESKTOP_SCREEN_1}) {
		flex-direction: column;
		justify-content: unset;
		align-items: unset;
	}
`;
export const HeroLeft = styled.div`
	max-width: 281px;
	width: 100%;

	@media (max-width: ${DESKTOP_SCREEN_1}) {
		max-width: 100%;
	}
`;
export const HeroBtn = styled.button`
	background: #d23732;
	box-shadow: 0px 5px 20px -10px rgba(38, 50, 56, 0.2);
	border-radius: 4px;
	padding: 1rem 2rem;

	@media (max-width: ${MOBILE_SCREEN_1}) {
		width: 100%;
	}
`;

export const HeroImg = styled(Image)``;
