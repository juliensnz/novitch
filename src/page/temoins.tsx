import React from "react";
import styled from "styled-components";
import { Title, Text } from "../component";

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
        Curabitur in aliquet ligula. Ut porta nulla eget velit convallis, a
        vehicula purus mattis. Donec nulla nibh, condimentum lobortis sagittis
        ut, fringilla nec sem. Aliquam vel turpis nisi. Vestibulum id vehicula
        ipsum. Duis in consequat odio. Nunc tincidunt lacinia massa, nec semper
        sem volutpat vitae. Duis at mauris libero. Praesent laoreet, nisi a
        sagittis convallis, nulla orci bibendum nisi, et lacinia diam ligula id
        ipsum.
      </Text>
      <Faces>
        <Face>
          <Image src="./images/virge.jpg" />
        </Face>
        <Face>
          <Image src="./images/flo.jpg" />
        </Face>
        <Face>
          <Image src="./images/sebas.jpg" />
        </Face>
        <Face>
          <Image src="./images/jeff.jpg" />
        </Face>
      </Faces>
    </Page>
  );
};
