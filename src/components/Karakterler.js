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
  console.log("karakterler", data);
  const filteredData = data.filter((obje) =>
    obje.name.toLowerCase().includes(input.toLowerCase())
  );

  if (!input) {
    return (
      <Header>
        {data.map((obje, index) => (
          <Karakter key={index} data={obje} />
        ))}
      </Header>
    );
  } else {
    return (
      <Header>
        {filteredData.map((obje, index) => (
          <Karakter key={index} data={obje} />
        ))}
      </Header>
    );
  }
};

export default Karakterler;
