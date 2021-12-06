import { Container } from "styles/globalStyles";
import teamImg1 from "public/images/team-img-1.png";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper";
import { SectionLeft, SectionRight, Wrapper } from "./Team.styles";

// install Swiper modules
SwiperCore.use([Pagination]);

function Team() {
  return (
    <Wrapper>
      <Container className="section">
        <SectionLeft>
          <Swiper
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
            With Ganbatte Cities, we’re launching a digital platform for cities
            that offers knowledge, actionable insights and tools to support the
            implementation of practical circular economy solutions to achieve
            their sustainability goals. This digital platform will continuously
            evolve and offer updated content and new features as more cities
            engage with it.
          </p>
          <p className="fs-20px weight-7 gray">
            – Ivonne Bojoh, Head of Digital at Circle Economy
          </p>
        </SectionRight>
      </Container>
    </Wrapper>
  );
}

export default Team;
