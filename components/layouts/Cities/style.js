import styled from "styled-components";

export const Wrapper = styled.div`
	padding: 170px 0;
	background-color: #f8f7f7;

	@media (max-width: 1000px) {
		padding: 50px 0;
	}
`;
export const CitiesCards = styled.div`
	display: flex;
	/* align-items: center; */
	justify-content: space-between;
	text-align: center;
	gap: 24px;

	@media (max-width: 1000px) {
		flex-wrap: wrap;
		justify-content: center;
	}
`;
export const CitiesCard = styled.div`
	max-width: 187px;
	display: flex;
	flex-direction: column;
	gap: 24px;
	align-items: center;

	@media (max-width: 500px) {
		max-width: 100%;
		width: 100%;
	}

	img {
	}
`;
