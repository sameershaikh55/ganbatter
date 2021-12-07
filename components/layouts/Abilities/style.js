import styled from "styled-components";

export const ContainerWrapper = styled.div`
	padding: 100px 0;

	@media (max-width: 500px) {
		padding: 50px 0;
	}
`;

export const Section = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 5rem;
	margin-bottom: 100px;

	flex-direction: ${(props) =>
		props.reverse === "true" ? "row-reverse" : "row"};

	@media (max-width: 950px) {
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

	@media (max-width: 950px) {
		max-width: 100%;
	}
`;
export const SectionImage = styled.div`
	min-width: 500px;

	@media (max-width: 1200px) {
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

		@media (max-width: 950px) {
			display: none;
		}
	}
`;
