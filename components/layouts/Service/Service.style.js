import styled from "styled-components";
import {
	MOBILE_SCREEN_1,
	DESKTOP_SCREEN_1,
	DESKTOP_SCREEN_2,
} from "../../../styles/StylingEndPoints";

export const ContainerWrapper = styled.div`
	padding: 136px 0;

	@media (max-width: ${MOBILE_SCREEN_1}) {
		padding: 95px 0 45px 0;
	}
`;

export const Section = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 5rem;

	flex-direction: ${(props) =>
		props.reverse === "true" ? "row-reverse" : "row"};

	margin-bottom: ${(props) => (props.mb === "true" ? "100px" : "0px")};

	@media (max-width: ${DESKTOP_SCREEN_1}) {
		flex-direction: column;
		justify-content: unset;
		align-items: unset;
		gap: 1.5rem;
		margin-bottom: 50px;
	}
`;
export const SectionRight = styled.div`
	flex: 1;
	max-width: 438px;

	@media (max-width: ${DESKTOP_SCREEN_1}) {
		order: -1;
		max-width: 100%;
	}
`;
export const SectionImage = styled.div`
	min-width: 500px;

	@media (max-width: ${DESKTOP_SCREEN_2}) {
		min-width: auto;
	}
`;
export const SectionTitle = styled.div`
	position: relative;

	&::after {
		content: "";
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		left: -40px;
		width: 18.9px;
		height: 18.9px;
		background-color: ${(props) => props.circleColor};
		border-radius: 50%;

		@media (max-width: ${DESKTOP_SCREEN_1}) {
			display: none;
		}
	}
`;
