import { Carousel } from "@mantine/carousel";
import { Card, Group } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import EmptyStar from "./Svg/EmptyStar";
import FilledStar from "./Svg/FilledStar";

export const Reviews = () => {
  const largeScreen = useMediaQuery('(min-width: 900px)');
  return (
    <Carousel
    className="review"
      withIndicators
      height={300}
      slideSize="33.333333%"
      slideGap="md"
      loop
      align={largeScreen ? "start" : 'center'}
      slidesToScroll={largeScreen ? 3 : 1}
      withControls={false}
      breakpoints={[
        { maxWidth: 'md', slideSize: '50%' },
        { maxWidth: 'sm', slideSize: '100%', slideGap: 0 },
      ]}
    >
      <Carousel.Slide>
        <div className="min-h-[100px] review-card p-10 text-left w-full">
          <h5 className="font-[700] text-[14px]">Julies Blake</h5>
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
          <h5 className="font-[700] text-[14px]">Edward Snow</h5>
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
          <h5 className="font-[700] text-[14px]">Lloyd Jules</h5>
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
