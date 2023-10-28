import styled from "styled-components";
import { useState } from "react";
import Karakter from "./Karakter";

const Karakterler = (props) => {
  const { data } = props;

  const Header = styled.div`
    margin: auto;
    width: 500px;
    display: flex;
    flex-direction: column;
  `;
  console.log("karakterler", data);
  return (
    <Header>
      {data.map((obje, index) => (
        <Karakter key={index} data={obje} />
      ))}
    </Header>
  );
};

export default Karakterler;
