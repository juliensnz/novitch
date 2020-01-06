import React from "react";
import styled from "styled-components";
import { Title, Text } from "../component";
import { baseUrl } from "../App";
import { useData } from "../data";

const Page = styled.div``;
const Faces = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(140px, 1fr));
  grid-gap: 30px;

  @media (max-width: 910px) {
    grid-template-columns: repeat(2, minmax(140px, 1fr));
  }
`;

const Face = styled.div``;

const Image = styled.img`
  width: 100%;
`;

export const Temoins = () => {
  const text = useData("pages.temoins.text.top");
  const title = useData("pages.temoins.title");
  const temoins = useData("pages.temoins.temoins");

  return (
    <Page>
      <Title>{title}</Title>
      <Text>{text}</Text>
      <Faces>
        {temoins.map((temoin: { image: string }) => (
          <Face key={temoin.image}>
            <Image src={`${baseUrl}/images/${temoin.image}`} />
          </Face>
        ))}
      </Faces>
    </Page>
  );
};
