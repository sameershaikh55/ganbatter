import { Container } from "styles/globalStyles";
import { Content, Wrapper } from "./style";

function Try() {
	return (
		<Wrapper>
			<Container>
				<Content>
					<p className="fs-28px gray weight-4 mb-25px">
						Want to make your city more circular, but not sure where to start?
					</p>

					<div>
						<p className="fs-20px weight-3">Ganbatte will help you.</p>
						<button className="fs-18px white weight-6 pointer">
							Try it now
						</button>
					</div>
				</Content>
			</Container>
		</Wrapper>
	);
}

export default Try;
