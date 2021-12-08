import { Container } from "styles/globalStyles";
import { Content, Wrapper } from "./CallToAction.style";

function CallToAction() {
	return (
		<Wrapper>
			<Container>
				<Content>
					<p className="start fs-28px gray weight-4 mb-25px">
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

export default CallToAction;
