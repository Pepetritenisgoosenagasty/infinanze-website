import React from "react";
import { Carousel } from "@mantine/carousel";
import { Card } from "@mantine/core";
import Blockchain from "./Svg/Blockchain";

export const CarouselCard = ({ children }: any) => (
  <>
    <div className="service-card border-t-2 border-[#0E7CFF] m-5 md:m-20 bg-white relative">{children}</div>
  </>
);

const ConsultCarousel = () => {
  return (
    <>
      <Carousel
        sx={{ maxWidth: 1000 }}
        mx="auto"
        height="100%"
        withIndicators
        slideGap="xl"
        align="start"
        withControls={false}
        breakpoints={[
          { maxWidth: 'md', slideSize: '100%' },
          { maxWidth: 'sm', slideSize: '100%', slideGap: 0 },
        ]}
      >
        <Carousel.Slide>
          <CarouselCard>
            <div className="bg-white min-h-[200px]  flex flex-col items-center justify-center rounded-lg px-10 py-16 text-center space-y-8">
                <Blockchain />
              <h5 className="font-bold">Blockchain Technology</h5>
              <p className="font-normal text-[14px]">
                It&apos;s a ledger of transactions that have unique
                characteristics, and can more securely store and transfer
                records using blockchain networks with strong, built-in
                encryption.
              </p>
            </div>
          </CarouselCard>
        </Carousel.Slide>
      </Carousel>
    </>
  );
};

export default ConsultCarousel;



