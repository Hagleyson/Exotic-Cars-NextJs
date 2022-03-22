import { FC, useState } from "react";
import { useRouter } from "next/router";
import { Container, Title } from "..";
import { CardStyles } from "./CardStyles";

import { carTypes } from "@helpers/index";

const Card: FC<carTypes> = (props) => {
  const [selectedImg, setSelectedImg] = useState(0);
  const { push } = useRouter();

  const toggleImage = (idx: number) => {
    setSelectedImg(idx);
  };
  const redirect = (id: number) => {
    push(`details/${id}`);
  };
  return (
    <CardStyles>
      <Container type="ball">
        {props.imgs.length > 1 &&
          props.imgs?.map((img, idx) => (
            <span
              key={idx}
              className={selectedImg === idx ? "selected" : undefined}
              onClick={() => toggleImage(idx)}
            />
          ))}
      </Container>
      <Container handleClick={() => redirect(props.id)} type="card">
        <Title type="cardModel">
          {props.name} <p>{props.model?.toUpperCase()}</p>
        </Title>

        <Container type="cardImage">
          {
            <img
              src={props.imgs[selectedImg].img}
              alt={props.imgs[selectedImg].label}
            />
          }
        </Container>
        <Title type="cardPrice">
          <span>$</span>
          {props.price}
          <span>/day</span>
        </Title>
        <Title type="cardBook">Book Now</Title>
      </Container>
    </CardStyles>
  );
};

export default Card;
