import styled from "styled-components";
import { Container } from "styles/globalStyles";
import { MOBILE_SCREEN_1 } from "../../../styles/StylingEndPoints";

export const Wrapper = styled.div`
	background-color: #f1eef0;
	padding: 3rem 0;

	@media screen and (max-width: ${MOBILE_SCREEN_1}) {
		padding: 95px 0;
	}
`;

export const ContainerWrapper = styled(Container)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	gap: 3rem;

	p {
		font-size: 24px;
		line-height: 40px;
		letter-spacing: 0.06em;
	}

	button {
		padding: 1.3rem 3rem;
		background: #763d8e;
		box-shadow: 0px 5px 20px -10px rgba(38, 50, 56, 0.2);
		border-radius: 4px;
		display: flex;
		align-items: center;
		gap: 0.7rem;

		@media (max-width: ${MOBILE_SCREEN_1}) {
			padding: 0.8rem 1.5rem;
			width: 100%;
			justify-content: center;
			font-size: 14px;
		}

		span {
			width: 44.25px;
			height: 44.25px;
			border-radius: 50%;
			background: #4a114a;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
`;
