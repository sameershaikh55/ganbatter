import styled from "styled-components";
import tryImg from "../../../public/images/try-bg.png";
import {
	MOBILE_SCREEN_1,
	TABLET_SCREEN_1,
} from "../../../styles/StylingEndPoints";

export const Wrapper = styled.div`
	height: 438px;
	background: url("/images/try-bg.png");
	display: flex;
	align-items: center;
	margin-bottom: 140px;

	@media (max-width: ${MOBILE_SCREEN_1}) {
		height: auto;
		padding: 96px 0px;
		background: url("/images/try-bg.png");
		background-position: bottom;
		margin-bottom: 96px;
	}
`;
export const Content = styled.div`
	max-width: 505px;
	/* height: 259px; */
	background-color: white;
	border-radius: 10px;
	padding: 3rem 2rem;

	@media (max-width: ${TABLET_SCREEN_1}) {
		.start {
			padding: 0rem 1rem;
		}

		max-width: 100%;
		text-align: center;

		> p {
			margin-bottom: 1.5rem;
		}
	}

	& > div {
		display: flex;
		align-items: center;
		justify-content: space-between;

		@media (max-width: ${TABLET_SCREEN_1}) {
			flex-direction: column;
			gap: 1.5rem;
		}

		& button {
			background-color: rgba(210, 55, 50, 1);
			padding: 1.1rem 2.5rem;
			box-shadow: 0px 5px 20px -10px rgba(38, 50, 56, 0.2);
			border-radius: 4px;
		}
	}
`;
