import { Carousel } from "@mantine/carousel";
import { Card, Group } from "@mantine/core";
import EmptyStar from "./Svg/EmptyStar";
import FilledStar from "./Svg/FilledStar";

export const Reviews = () => {
  return (
    <Carousel
      withIndicators
      height={300}
      slideSize="33.333333%"
      slideGap="md"
      loop
      align="start"
      slidesToScroll={3}
      withControls={false}
    >
      <Carousel.Slide>
        <div className="min-h-[100px] review-card p-10 text-left">
          <h5 className="font-[700] text-[14px]">Peter Paker</h5>
          <div className="flex items-center my-1">
            <p className="font-[700] text-[14px]">4.2</p>
            <div className="flex ml-4">
              
              <FilledStar />
              <FilledStar />
              <FilledStar />
              <FilledStar />
              <EmptyStar />
            </div>
          </div>
          <p className="font-[400] text-[12px]">
            infinanze proved to be a professional service provider from the
            outset. We appreciate their proactive approach and ability to
            suggest improvements to a prospective solution on both architectural
            and business levels
          </p>
        </div>
      </Carousel.Slide>
      <Carousel.Slide>
      <div className="min-h-[100px] review-card p-10 text-left">
          <h5 className="font-[700] text-[14px]">Peter Paker</h5>
          <div className="flex items-center my-1">
            <p className="font-[700] text-[14px]">4.2</p>
            <div className="flex ml-4">
              
              <FilledStar />
              <FilledStar />
              <FilledStar />
              <FilledStar />
              <EmptyStar />
            </div>
          </div>
          <p className="font-[400] text-[12px]">
            infinanze proved to be a professional service provider from the
            outset. We appreciate their proactive approach and ability to
            suggest improvements to a prospective solution on both architectural
            and business levels
          </p>
        </div>
      </Carousel.Slide>
      <Carousel.Slide>
      <div className="min-h-[100px] review-card p-10 text-left">
          <h5 className="font-[700] text-[14px]">Peter Paker</h5>
          <div className="flex items-center my-1">
            <p className="font-[700] text-[14px]">4.2</p>
            <div className="flex ml-4">
              
              <FilledStar />
              <FilledStar />
              <FilledStar />
              <FilledStar />
              <EmptyStar />
            </div>
          </div>
          <p className="font-[400] text-[12px]">
            infinanze proved to be a professional service provider from the
            outset. We appreciate their proactive approach and ability to
            suggest improvements to a prospective solution on both architectural
            and business levels
          </p>
        </div>
      </Carousel.Slide>
      <Carousel.Slide>
      <div className="min-h-[100px] review-card p-10 text-left">
          <h5 className="font-[700] text-[14px]">Peter Paker</h5>
          <div className="flex items-center my-1">
            <p className="font-[700] text-[14px]">4.2</p>
            <div className="flex ml-4">
              
              <FilledStar />
              <FilledStar />
              <FilledStar />
              <FilledStar />
              <EmptyStar />
            </div>
          </div>
          <p className="font-[400] text-[12px]">
            infinanze proved to be a professional service provider from the
            outset. We appreciate their proactive approach and ability to
            suggest improvements to a prospective solution on both architectural
            and business levels
          </p>
        </div>
      </Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  );
};
