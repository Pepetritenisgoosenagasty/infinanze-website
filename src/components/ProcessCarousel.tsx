import { Carousel } from "@mantine/carousel";
import React from "react";

const CarouselCard = ({ children }: any) => (
  <div className="space-y-10">{children}</div>
);

const ProcessCarousel = () => {
  return (
    <>
      <Carousel
        sx={{ maxWidth: 900 }}
        mx="auto"
        height="100%"
        styles={{
          control: {
            "&[data-inactive]": {},
          },
        }}
        withIndicators
        slideGap="xl"
        align="start"
        breakpoints={[
          { maxWidth: 'md', slideSize: '100%' },
          { maxWidth: 'sm', slideSize: '100%', slideGap: 0 },
        ]}
      >
        <Carousel.Slide>
          <CarouselCard>
            <div className="flex items-center justify-center space-x-8">
              <div className="bg-white px-4 py-1 text-[30px] font-bold">1</div>
              <h1 className="text-white font-bold">Analysis</h1>
            </div>
            <div className="bg-white min-h-[300px]  flex items-center justify-center rounded-lg p-2 md:p-20 text-center">
              <p className="font-medium text-[18px]">
                Our IT consulting advisors study your existing software
                solutions and the ways in which your employees use them,
                identifying problems in workflows and automation.
              </p>
            </div>
          </CarouselCard>
        </Carousel.Slide>
        <Carousel.Slide>
          <CarouselCard>
            <div className="flex items-center justify-center space-x-8">
              <div className="bg-white px-4 py-1 text-[30px] font-bold">2</div>
              <h1 className="text-white font-bold">Strategy</h1>
            </div>
            <div className="bg-white min-h-[300px] flex items-center justify-center rounded-lg p-2 md:p-20 text-center">
              <p className="font-medium text-[18px]">
                The advisors design a roadmap and strategy that will help your
                business leverage the latest technologies and de-clutter your
                software infrastructure. Then, they set software and employee
                KPIs.
              </p>
            </div>
          </CarouselCard>
        </Carousel.Slide>
        <Carousel.Slide>
        <CarouselCard>
            <div className="flex items-center justify-center space-x-8">
              <div className="bg-white px-4 py-1 text-[30px] font-bold">3</div>
              <h1 className="text-white font-bold">Performance</h1>
            </div>
            <div className="bg-white min-h-[300px] flex items-center justify-center rounded-lg p-2 md:p-20 text-center">
              <p className="font-medium text-[18px]">
              Impactful IT consulting services rely on collaboration between the client and the IT consulting company. Our experts will closely analyse your workflows, tracking the performance to discover the pain points. Our software engineers will then eliminate the impeding elements.
              </p>
            </div>
          </CarouselCard>
        </Carousel.Slide>
        <Carousel.Slide>
        <CarouselCard>
            <div className="flex items-center justify-center space-x-8">
              <div className="bg-white px-4 py-1 text-[30px] font-bold">4</div>
              <h1 className="text-white font-bold">Improvements</h1>
            </div>
            <div className="bg-white min-h-[300px] flex items-center justify-center rounded-lg p-2 md:p-20 text-center">
              <p className="font-medium text-[18px]">
              After completing the initially set goals, our IT consulting advisors and software engineers recommend steps for future improvements, as well as assist with implementing them.
              </p>
            </div>
          </CarouselCard>
        </Carousel.Slide>
        {/* ...other slides */}
      </Carousel>
    </>
  );
};

export default ProcessCarousel;
