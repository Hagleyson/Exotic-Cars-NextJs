import { ContentCarouselStyle } from "./ContentCarouselStyle";
import { FC } from "react";
import Image from "next/image";
type propsType = {
  selected: boolean;
  img: any;
  handleClick: () => void;
};

const ContentCarousel: FC<propsType> = (props) => {
  return (
    <ContentCarouselStyle onClick={props.handleClick} selected={props.selected}>
      <div>
        <div>
          <Image
            src={props.img}
            alt="ferrari3"
            width={120}
            height={50}
            layout="responsive"
          />
        </div>
      </div>
    </ContentCarouselStyle>
  );
};

export default ContentCarousel;
