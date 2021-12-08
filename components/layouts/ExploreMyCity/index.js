import { Container } from "styles/globalStyles";
import { ContentWrapper, Wrapper } from "./ExploreMyCity.style";

function ExploreMyCity() {
	return (
		<Wrapper>
			<Container>
				<ContentWrapper>
					<p className="fs-36px white weight-3 mb-30px">
						All the solutions to resolve our climate challenges already exist.
					</p>

					<button className="fs-18px weight-7 pointer">Explore my city</button>
				</ContentWrapper>
			</Container>
		</Wrapper>
	);
	
}

export default ExploreMyCity;
