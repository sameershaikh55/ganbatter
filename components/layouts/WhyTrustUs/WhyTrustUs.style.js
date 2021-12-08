import styled from "styled-components";
import { MOBILE_SCREEN_1 } from "../../../styles/StylingEndPoints";

export const Wrapper = styled.div`
	padding: 136px 0 132px 0;
	background: #f8f7f7;

	@media (max-width: ${MOBILE_SCREEN_1}) {
		padding: 95px 0;
	}
`;
export const TrustCards = styled.div`
	display: flex;
	flex-direction: column;
	gap: 62px;

	@media (max-width: ${MOBILE_SCREEN_1}) {
		gap: 42px;
	}
`;
export const TrustCard = styled.div`
	display: flex;
	align-items: center;
	gap: 32px;
	max-width: 636px;
`;

export const Circle = styled.div`
	width: 30px;
	height: 30px;
	background: ${(props) => props.bgColor};
	border-radius: 50%;
`;
