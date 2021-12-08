import React, { useState } from "react";
import { Container } from "styles/globalStyles";
import teamImg1 from "public/images/team-img-1.png";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper";
import { SectionLeft, SectionRight, Wrapper } from "./Team.style";

// install Swiper modules
SwiperCore.use([Pagination]);

function Team() {
	const [slide, setSlide] = useState(0);

	const slideTextData = [
		{
			t: "With Ganbatte Cities, we’re launching a digital platform for cities that offers knowledge, actionable insights and tools to support the implementation of practical circular economy solutions to achieve their sustainability goals. This digital platform will continuously evolve and offer updated content and new features as more cities engage with it.",
			n: "– Ivonne Bojoh, Head of Digital at Circle Economy",
		},
		{
			t: "platform for cities that offers knowledge, actionable insights and tools to support the implementation of practical circular economy solutions to achieve their sustainability goals. This digital platform will continuously evolve and offer updated content and new features as more cities engage with it.",
			n: "– Mr. Odiso, Head of Digital at Circle Economy",
		},
		{
			t: "we’re launching a digital platform for cities that offers knowledge, actionable insights the implementation of practical circular economy solutions to achieve their sustainability goals. This digital platform will continuously evolve and offer updated content and new features as more cities engage with it.",
			n: "– Mrs Bojoh, Head of Digital at Circle Economy",
		},
	];

	return (
		<Wrapper>
			<Container className="section">
				<SectionLeft>
					<Swiper
						onSlideChange={(e) => setSlide(e.realIndex)}
						pagination={{
							clickable: true,
						}}
						slidesPerView={1}
						grabCursor={true}
						className="mySwiper"
					>
						<SwiperSlide>
							<Image src={teamImg1} alt="" />
						</SwiperSlide>
						<SwiperSlide>
							<Image src={teamImg1} alt="" />
						</SwiperSlide>
						<SwiperSlide>
							<Image src={teamImg1} alt="" />
						</SwiperSlide>
					</Swiper>
				</SectionLeft>
				<SectionRight>
					<p className="fs-20px gray weight-4 mb-15px">
						{slideTextData[slide].t}
					</p>
					<p className="fs-20px weight-7 gray">{slideTextData[slide].n}</p>
				</SectionRight>
			</Container>
		</Wrapper>
	);
}

export default Team;
