import styled from "styled-components";
import {
	MOBILE_SCREEN_1,
	DESKTOP_SCREEN_1,
} from "../../../styles/StylingEndPoints";

export const Wrapper = styled.div`
	padding: 170px 0;
	background-color: #f8f7f7;

	@media (max-width: ${DESKTOP_SCREEN_1}) {
		padding: 95px 0;
	}
`;
export const CitiesCards = styled.div`
	display: flex;
	/* align-items: center; */
	justify-content: space-between;
	text-align: center;
	gap: 24px;

	@media (max-width: ${DESKTOP_SCREEN_1}) {
		flex-wrap: wrap;
		justify-content: center;
	}

	@media (max-width: ${MOBILE_SCREEN_1}) {
		gap: 64px;
	}
`;
export const CitiesCard = styled.div`
	max-width: 187px;
	display: flex;
	flex-direction: column;
	gap: 24px;
	align-items: center;

	@media (max-width: ${MOBILE_SCREEN_1}) {
		max-width: 100%;
		width: 100%;
	}

	img {
		width: 187px;
		height: 148px;
		border-radius: 10px;

		@media (max-width: ${MOBILE_SCREEN_1}) {
			width: 100%;
			height: 237.48px;
		}
	}
`;
