import styled from "styled-components";
import {
	MOBILE_SCREEN_1,
	TABLET_SCREEN_1,
} from "../../../styles/StylingEndPoints";

export const Wrapper = styled.div`
	padding: 100px 0;

	@media (max-width: ${MOBILE_SCREEN_1}) {
		padding: 95px 0;
	}
`;
export const GoalImages = styled.div`
	display: flex;
	justify-content: space-between;

	@media (max-width: ${TABLET_SCREEN_1}) {
		flex-direction: column;
		gap: 2rem;
	}

	& > div {
		position: relative;
		@media (max-width: ${TABLET_SCREEN_1}) {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 1rem;
		}
	}

	& > div:nth-child(1) p {
		position: absolute;
		top: 10%;
		left: 78%;
		width: 322.44px;

		@media (max-width: ${TABLET_SCREEN_1}) {
			width: 100%;
			position: static;
		}
	}

	& > div:nth-child(2) p {
		position: absolute;
		top: 50%;
		right: 85%;
		width: 288.44px;
		text-align: right;
		@media (max-width: ${TABLET_SCREEN_1}) {
			width: 100%;
			position: static;
			text-align: left;
		}
	}

	& > div:nth-child(2) {
		margin-top: 200px;
		@media (max-width: ${TABLET_SCREEN_1}) {
			margin-top: 0;
		}
	}
`;
