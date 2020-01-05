import React from "react";
import styled from "styled-components";
import { Title, Text } from "../component";
import { baseUrl } from "../App";

const Page = styled.div``;
const Faces = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(140px, 1fr));
  grid-gap: 30px;

  @media (max-width: 910px) {
    grid-template-columns: repeat(2, minmax(140px, 1fr));
  }
`;

const Face = styled.div`
  /* max-height: 300px; */
`;

const Image = styled.img`
  width: 100%;
`;

export const Temoins = () => {
  return (
    <Page>
      <Title>Mon super titre</Title>
      <Text>
        Morbi id tortor non quam aliquet eleifend. Etiam ultricies ac neque eget
        volutpat. Fusce et ultricies elit, vel efficitur nisi. Aenean mattis
        orci eget interdum iaculis. Maecenas odio eros, luctus in enim ac,
        scelerisque condimentum leo. Ut rutrum gravida felis vel dictum.
      </Text>
      <Faces>
        <Face>
          <Image src={`${baseUrl}/images/virge.jpg`} />
        </Face>
        <Face>
          <Image src={`${baseUrl}/images/flo.jpg`} />
        </Face>
        <Face>
          <Image src={`${baseUrl}/images/sebas.jpg`} />
        </Face>
        <Face>
          <Image src={`${baseUrl}/images/jeff.jpg`} />
        </Face>
      </Faces>
    </Page>
  );
};
