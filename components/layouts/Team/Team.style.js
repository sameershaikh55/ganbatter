import styled from "styled-components";
import {
	MOBILE_SCREEN_1,
	TABLET_SCREEN_1,
	DESKTOP_SCREEN_1,
} from "../../../styles/StylingEndPoints";

export const Wrapper = styled.div`
	padding: 150px 0;
	background: #f8f7f7;

	.section {
		display: flex;
		align-items: center;
		gap: 64px;
	}

	@media (max-width: ${DESKTOP_SCREEN_1}) {
		padding: 95px 0;
	}
	@media (max-width: ${TABLET_SCREEN_1}) {
		.section {
			gap: 44px;
			flex-direction: column;
		}
	}
`;
export const SectionLeft = styled.div`
	min-width: 212px;
	max-width: 212px;
	margin: 0 auto;

	@media (max-width: ${TABLET_SCREEN_1}) {
		min-width: 300px;
		max-width: 300px;
	}
	@media (max-width: ${MOBILE_SCREEN_1}) {
		min-width: 100%;
		max-width: 100%;
	}

	.swiper-slide {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	img {
		width: 100%;
		border: 2px solid red;
	}

	.swiper-wrapper {
		padding-bottom: 20px;
		width: 100%;
	}

	.swiper-pagination-bullet {
		background: #bea8b5 !important;
		width: 21.33px;
		height: 21.33px;
		border-radius: 50%;
		transition: all 0.2s ease !important;

		&-active {
			background: #763d8e !important;
			transition: all 0.2s ease !important;
		}
	}
`;
export const SectionRight = styled.div``;
