import React from "react";
import styled from "styled-components";
import avalicao from "./assets/avalicao.png";
import consulta from "./assets/consulta.png";
import grafico from "./assets/grafico.png";

interface Props {
  image?: string;
  children?: React.ReactNode;
}
interface IImage {
  avaliation: string;
  graph: string;
  query: string;
}
const SpanStyled = styled.span<Props>`
  background-reapeat: no-repeat;
  background-position: center;
  width: 25px;
  height: 25px;
  background-image: ${(props) =>
    props.image ? `url(${props.image})` : "none"};
`;

const TitleStyled = styled.h2`
  color: var(--azul-claro);
`

const ContainerStyled = styled.div`
  display: flex;
  align-itens: center;
`

function Title({ image, children }: Props) {
  const mapedImages: IImage = {
    avaliation: avalicao,
    graph: grafico,
    query: consulta,
  };
  return (
    <ContainerStyled>
      <SpanStyled image={mapedImages[image as keyof IImage]} />
      <TitleStyled>{children}</TitleStyled>
    </ContainerStyled>
  );
}

export default Title;
