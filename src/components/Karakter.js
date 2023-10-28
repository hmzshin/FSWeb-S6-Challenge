import show from "../icons/chevron-down-solid.svg";
import hide from "../icons/chevron-up-solid.svg";
import styled from "styled-components";
import { useState } from "react";

const Karakter = (props) => {
  const { data } = props;
  const [isShown, setIsShown] = useState(false);

  const Header = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;
  const Title = styled.h4`
    height: 100%;
    padding: 5px 0px;
  `;
  const ImageContainer = styled.div`
    width: 30px;
    height: 100%;
    padding: 0px 0px 5px 0px;
  `;
  const Image = styled.img`
    width: 100%;
    height: 100%;
  `;

  const PassiveContainer = styled.div`
    display: none;
  `;

  const ActiveContainer = styled(PassiveContainer)`
    display: flex;
    flex-direction: column;
    transition: all 1s;
    animation-duration: 0.5s;
    animation-name: highlightButton;
  `;

  const Info = styled.p``;

  console.log("karakter", data);
  const ContentContainer = isShown ? ActiveContainer : PassiveContainer;

  return (
    <>
      <Header onClick={() => (isShown ? setIsShown(false) : setIsShown(true))}>
        <Title>{data.name}</Title>
        <ImageContainer>
          <Image src={isShown ? hide : show} />
        </ImageContainer>
      </Header>

      <ContentContainer>
        <Info>Gender: {data.gender}</Info>
        <Info>Height: {data.height}</Info>
        <Info>Mass: {data.mass}</Info>
        <Info>Birth Year: {data["birth_year"]}</Info>
        <Info>Eye Color: {data["eye_color"]}</Info>
        <Info>Hair Color: {data["hair_color"]}</Info>
        <Info>Skin Color: {data["skin_color"]}</Info>
        <Info>Appears in {data.films.length} films</Info>
      </ContentContainer>
    </>
  );
};

export default Karakter;
