import styled from "styled-components";
import Image from "next/image";
import heroBg from "public/images/hero-bg.png";

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
	}
`;
export const HeroWrapper = styled.div`
	padding: 60px 0;
	height: calc(100vh - 70px);
	display: flex;
	align-items: center;
	/* justify-content: space-between; */
	gap: 90px;

	@media (max-width: 1000px) {
		padding: 30px 0;
		height: auto;
	}

	@media (max-width: 800px) {
		flex-direction: column;
		justify-content: unset;
		align-items: unset;
	}
`;
export const HeroLeft = styled.div`
	max-width: 281px;
	width: 100%;

	@media (max-width: 800px) {
		max-width: 100%;
	}
`;
export const HeroBtn = styled.button`
	background: #d23732;
	box-shadow: 0px 5px 20px -10px rgba(38, 50, 56, 0.2);
	border-radius: 4px;
	padding: 1rem 2rem;

	@media (max-width: 500px) {
		width: 100%;
	}
`;

export const HeroImg = styled(Image)``;
