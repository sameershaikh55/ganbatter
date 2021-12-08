import styled from "styled-components";
import { MOBILE_SCREEN_1 } from "../../../styles/StylingEndPoints";

export const Wrapper = styled.div`
	max-width: 636.81px;
	margin-bottom: 145px;
`;
export const TutorialRoadmap = styled.div`
	& > div {
		/* min-height: 80px; */

		& .line {
			content: "";
			position: absolute;
			height: 100%;
			width: 0;
			/* border: 4px dashed red; */
			left: 18px;

			background: linear-gradient(
				rgba(253, 189, 87, 1) 60%,
				rgba(255, 255, 255, 0) 0%
			);
			background-position: right;
			background-size: 100% 16px;
			background-repeat: repeat-y;

			width: 5px;
			z-index: -1;
		}
	}
`;
export const TutorialCard = styled.div`
	position: relative;

	padding-bottom: ${(props) => (props.last === "true" ? "0rem" : "2rem")};

	& > div {
		display: flex;
		align-items: center;
		gap: 22px;
	}

	.box {
		width: 40.43px;
		height: 40.43px;
		border-radius: 50%;
		font-size: 24px;
		color: white;
		font-weight: 500;

		display: flex;
		justify-content: center;
		align-items: center;

		background: ${(props) => props.boxBg};
	}

	@media screen and (max-width: ${MOBILE_SCREEN_1}) {
		padding-bottom: ${(props) => (props.last === "true" ? "0rem" : "72px")};
	}
`;
