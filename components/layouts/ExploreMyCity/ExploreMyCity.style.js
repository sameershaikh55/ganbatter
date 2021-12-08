import styled from "styled-components";
import { MOBILE_SCREEN_1 } from "../../../styles/StylingEndPoints";

export const Wrapper = styled.div`
	height: 443px;
	background: url("/images/explore-bg.png");

	display: flex;
	align-items: center;

	@media (max-width: ${MOBILE_SCREEN_1}) {
		height: auto;
		background-position: center center;
		background-size: cover;
		background-repeat: no-repeat;
		padding: 95px 0px;
	}
`;

export const ContentWrapper = styled.div`
	max-width: 503.57px;
	width: 100%;

	p {
		letter-spacing: 0.06em;
		line-height: 48px;
	}

	button {
		padding: 1rem 2rem;
		background: #fdbd57;
		box-shadow: 0px 5px 20px -10px rgba(38, 50, 56, 0.2);
		border-radius: 4px;
		color: #4a114a;

		@media (max-width: ${MOBILE_SCREEN_1}) {
			margin-top: 48px;
		}
	}

	@media (max-width: ${MOBILE_SCREEN_1}) {
		text-align: center;
	}
`;
