import { Container } from "styles/globalStyles";
import { Wrapper, GoalImages } from "./style";
import goalImg1 from "public/images/goal-img-1.png";
import goalImg2 from "public/images/goal-img-2.png";
import Image from "next/image";

function Goal() {
	return (
		<Container>
			<Wrapper>
				<p className="fs-36px gray weight-3 mb-100px">
					What do we want to achieve with Ganbatte?
				</p>

				<GoalImages>
					<div>
						<Image src={goalImg1} alt="" />

						<p className="fs-28px weight-7 gray">
							Circular Cities that can <span className="purple">thrive</span>{" "}
							within planetary boundaries
						</p>
					</div>
					<div>
						<Image src={goalImg2} alt="" />
						<p className="fs-28px weight-7 gray">
							Doubling circularity by 2032 with the power of{" "}
							<span className="purple">data</span>
						</p>
					</div>
				</GoalImages>
			</Wrapper>
		</Container>
	);
}

export default Goal;
