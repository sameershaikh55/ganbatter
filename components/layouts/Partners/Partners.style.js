import styled from "styled-components";
import {
	MOBILE_SCREEN_1,
	MOBILE_SCREEN_2,
} from "../../../styles/StylingEndPoints";

export const Wrapper = styled.div`
	padding: 136px 0;

	@media (max-width: ${MOBILE_SCREEN_1}) {
		padding: 95px 0;
	}
`;
export const PartnersImages = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	gap: 60px;

	@media screen and (max-width: ${MOBILE_SCREEN_1}) {
		--bs-gutter-x: 0.8rem;
		--bs-gutter-y: 0.8rem;
		display: flex;
		flex-wrap: wrap;
		margin-top: calc(var(--bs-gutter-y) * -1);
		margin-right: calc(var(--bs-gutter-x) * -0.5);
		margin-left: calc(var(--bs-gutter-x) * -0.5);

		> * {
			flex-shrink: 0;
			width: 100%;
			max-width: 100%;
			padding-right: calc(var(--bs-gutter-x) * 0.5);
			padding-left: calc(var(--bs-gutter-x) * 0.5);
			margin-top: var(--bs-gutter-y);
		}

		div {
			flex: 0 0 auto;
			width: 40%;
		}
	}

	@media screen and (max-width: ${MOBILE_SCREEN_2}) {
		--bs-gutter-x: 0.8rem;
		--bs-gutter-y: 0.8rem;
		display: flex;
		flex-wrap: wrap;
		margin-top: calc(var(--bs-gutter-y) * -1);
		margin-right: calc(var(--bs-gutter-x) * -0.5);
		margin-left: calc(var(--bs-gutter-x) * -0.5);
		gap: 30px;

		> * {
			flex-shrink: 0;
			width: 100%;
			max-width: 100%;
			padding-right: calc(var(--bs-gutter-x) * 0.5);
			padding-left: calc(var(--bs-gutter-x) * 0.5);
			margin-top: var(--bs-gutter-y);
		}

		div {
			flex: 0 0 auto;
			width: 100%;
		}
	}
`;
