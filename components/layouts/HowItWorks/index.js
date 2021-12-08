import { Container } from "styles/globalStyles";
import { Wrapper, TutorialCard, TutorialRoadmap } from "./HowItWorks.style";

const TutRoadmap = ({ boxBg, dashedColor, title, index, last }) => {
	return (
		<TutorialCard boxBg={boxBg} last={last}>
			<div className="line" dashedColor={dashedColor}></div>
			<div>
				<div>
					<div className="box">{index}</div>
				</div>
				<div>
					<p className="fs-20px gray weight-4">{title}</p>
				</div>
			</div>
		</TutorialCard>
	);
};

function HowItWorks() {
	const roadmapData = [
		{
			index: "1",
			title: "Find your city",
			dashedColor:
				"linear-gradient(rgba(253, 189, 87, 1) 60%,rgba(255, 255, 255, 0) 0%)",
			boxBg: "linear-gradient(270deg, #FDBD57 0%, #F38A2A 0.01%, #EC6032 100%)",
		},
		{
			index: "2",
			title:
				"Explore what the biggest emissions, materials flows and jobs potential is for your city",
			dashedColor:
				"linear-gradient(rgba(253, 189, 87, 1) 60%,rgba(255, 255, 255, 0) 0%)",
			boxBg: "linear-gradient(270deg, #EC6032 0%, #AB2A26 100%);",
		},
		{
			index: "4",
			title:
				"Learn from case studies of circular solutions implemented all over the world",
			dashedColor:
				"linear-gradient(rgba(253, 189, 87, 1) 60%,rgba(255, 255, 255, 0) 0%)",
			boxBg: "linear-gradient(270deg, #7C0F4D 0%, #5C0C40 100%)",
		},
		{
			index: "5",
			title:
				"Find out where you are on your journey towards circularity, and what cities to learn from",
			dashedColor:
				"linear-gradient(rgba(253, 189, 87, 1) 60%,rgba(255, 255, 255, 0) 0%)",
			boxBg: "linear-gradient(270deg, #763D8E 0%, #4A114A 100%)",
			last: "true",
		},
	];

	return (
		<Container>
			<Wrapper>
				<p className="fs-36px gray weight-3  mb-25px">How does it work?</p>
				<p className="fs-16px gray weight-3 mb-45px">
					Ganbatte, Cities! enables cities to tackle the most crucial
					sustainability challenges. We help city officials & other changemakers
					identify proven solutions to help tackle climate challenges, learn and
					compare with peers around the world, and help cities become
					future-proof. Together, we’ll accelerate the transition to a safe and
					just world for all.{" "}
				</p>

				<TutorialRoadmap>
					{roadmapData.map((prev, i) => {
						const { boxBg, dashedColor, index, title, last } = prev;
						return (
							<div key={i}>
								<TutRoadmap
									index={index}
									title={title}
									dashedColor={dashedColor}
									boxBg={boxBg}
									last={last}
								/>
							</div>
						);
					})}
				</TutorialRoadmap>
			</Wrapper>
		</Container>
	);
}

export default HowItWorks;
