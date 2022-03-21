import { ContentCarouselStyle } from "./ContentCarouselStyle";
import { FC } from "react";

type propsType = {
  selected: boolean;
  img: any;
  handleClick: () => void;
};

const ContentCarousel: FC<propsType> = (props) => {
  return (
    <ContentCarouselStyle onClick={props.handleClick} selected={props.selected}>
      <div>
        <img src={props.img} alt="ferrari3" />
      </div>
    </ContentCarouselStyle>
  );
};

export default ContentCarousel;
