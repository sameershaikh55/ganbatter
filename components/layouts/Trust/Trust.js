import { Container } from "styles/globalStyles";
import { Wrapper, Circle, TrustCard, TrustCards } from "./style";

function Trust() {
	return (
		<Wrapper>
			<Container>
				<p className="fs-36px weight-4 gray mb-40px">Why trust us?</p>

				<TrustCards>
					<TrustCard>
						<div>
							<Circle
								className="circle"
								bgColor="rgba(243, 138, 42, 1)"
							></Circle>
						</div>
						<div>
							<p className="fs-20px gray weight-4">
								Ganbatte is based on{" "}
								<span className="weight-6">10 years of research</span>, with
								which we have developed actionable solutions backed by evidence.
							</p>
						</div>
					</TrustCard>
					<TrustCard>
						<div>
							<Circle
								className="circle"
								bgColor="rgba(124, 15, 77, 1)"
							></Circle>
						</div>
						<div>
							<p className="fs-20px gray weight-4">
								Ganbatte keeps collecting{" "}
								<span className="weight-6"> data from around the world</span>,
								and makes it easily accessible to you.
							</p>
						</div>
					</TrustCard>
					<TrustCard>
						<div>
							<Circle
								className="circle"
								bgColor="rgba(210, 55, 50, 1)"
							></Circle>
						</div>
						<div>
							<p className="fs-20px gray weight-4">
								Ganbatte is{" "}
								<span className="weight-6">
									{" "}
									developed hand-in-hand with users
								</span>{" "}
								and partners to co-create the best possible features.
							</p>
						</div>
					</TrustCard>
				</TrustCards>
			</Container>
		</Wrapper>
	);
}

export default Trust;
