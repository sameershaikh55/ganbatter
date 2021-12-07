import styled from "styled-components";

export const Wrapper = styled.div`
	height: 443px;
	background: url("/images/explore-bg.png");

	display: flex;
	align-items: center;

	@media (max-width: 500px) {
		background-position: center center;
		background-size: cover;
		background-repeat: no-repeat;
	}
`;

export const ContentWrapper = styled.div`
	max-width: 503.57px;
	width: 100%;

	@media (max-width: 500px) {
		text-align: center;
	}

	button {
		padding: 1rem 2rem;
		background: #fdbd57;
		box-shadow: 0px 5px 20px -10px rgba(38, 50, 56, 0.2);
		border-radius: 4px;
		color: #4a114a;
	}
`;
