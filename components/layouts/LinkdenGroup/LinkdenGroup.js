import { Wrapper, ContainerWrapper } from "./style";
import { FaLinkedinIn } from "react-icons/fa";

function LinkdenGroup() {
	return (
		<Wrapper>
			<ContainerWrapper>
				<p className="fs-24px purple weight-6">
					You can also join our group of early adopters:
				</p>

				<button className="white fs-18px weight-6 pointer">
					Join our LinkedIn group{" "}
					<span>
						<FaLinkedinIn />
					</span>
				</button>
			</ContainerWrapper>
		</Wrapper>
	);
}

export default LinkdenGroup;
