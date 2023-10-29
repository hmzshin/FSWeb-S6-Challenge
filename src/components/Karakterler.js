import styled from "styled-components";
import { useState } from "react";
import Karakter from "./Karakter";

const Karakterler = (props) => {
  const { data, input } = props;

  const Header = styled.div`
    margin: auto;
    width: 500px;
    display: flex;
    flex-direction: column;
  `;

  const filteredData = !input
    ? data
    : data.filter((obje) =>
        obje.name.toLowerCase().includes(input.toLowerCase())
      );

  return (
    <Header>
      {filteredData.map((obje, index) => {
        return <Karakter key={index} data={obje} />;
      })}
    </Header>
  );
};

export default Karakterler;
