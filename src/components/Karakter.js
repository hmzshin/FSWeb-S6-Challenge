import show from "../icons/chevron-down-solid.svg";
import hide from "../icons/chevron-up-solid.svg";
import styled from "styled-components";
import { useState } from "react";
import Film from "./Film";

const Karakter = (props) => {
  const { data } = props;
  const [isShown, setIsShown] = useState(false);
  const [isShownP, setIsShownP] = useState(false);

  const Container = styled.div`
    transition: 10s;
  `;

  const Section = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px;
    background-color: #6c5b7b;
    margin-bottom: 10px;
  `;
  const Title = styled.h4`
    height: 100%;
    padding: 5px 0px 5px 20px;
  `;
  const ImageContainer = styled.div`
    width: 30px;
    height: 100%;
    margin-right: 5px;
  `;
  const Image = styled.img`
    width: 100%;
    height: 100%;
  `;

  // const PassiveContainer = styled.div`
  //   display: none;
  // `;

  const PassiveContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    visibility: hidden;
    height: 0px;
  `;

  const ActiveContainer = styled(PassiveContainer)`
    visibility: visible;
    height: auto;
  `;

  const Info = styled.div`
    display: flex;
    justify-content: space-between;
    width: 300px;
    padding: 5px 0px;
    border-bottom: 2px solid;
    box-shadow: 10px;
  `;

  const Text = styled.p`
    margin-left: 30px;
    width: 100px;
    text-align: left;
  `;

  const Hide = styled.div`
    visibility: hidden;
    height: 0px;
  `;
  const Show = styled(Hide)`
    visibility: visible;
    display: block;
    height: auto;
  `;
  const Header = isShownP && isShown ? Show : Hide;

  console.log("karakter", data);
  const ContentContainer = isShown ? ActiveContainer : PassiveContainer;

  return (
    <Container>
      <Section onClick={() => (isShown ? setIsShown(false) : setIsShown(true))}>
        <Title>{data.name}</Title>
        <ImageContainer>
          <Image src={isShown ? hide : show} />
        </ImageContainer>
      </Section>

      <ContentContainer>
        <Info>
          <Text>Gender:</Text>{" "}
          <Text>{data.gender[0].toUpperCase() + data.gender.slice(1)} </Text>
        </Info>
        <Info>
          <Text>Height:</Text>
          <Text>{data.height}</Text>
        </Info>
        <Info>
          <Text>Mass:</Text>
          <Text>{data.mass}</Text>
        </Info>
        <Info>
          <Text>Birth Year:</Text> <Text>{data["birth_year"]}</Text>
        </Info>
        <Info>
          <Text>Eye Color: </Text>
          <Text>
            {" "}
            {data["eye_color"][0].toUpperCase() + data["eye_color"].slice(1)}
          </Text>
        </Info>
        <Info>
          <Text>Hair Color: </Text>
          <Text>
            {" "}
            {data["hair_color"][0].toUpperCase() + data["hair_color"].slice(1)}
          </Text>
        </Info>
        <Info>
          <Text>Skin Color:</Text>
          <Text>
            {data["skin_color"][0].toUpperCase() + data["skin_color"].slice(1)}
          </Text>
        </Info>
        <Info
          onClick={() => (isShownP ? setIsShownP(false) : setIsShownP(true))}
        >
          Appears in {data.films.length} films
        </Info>
        <Header>
          {data.films.map((film, index) => (
            <Film key={index} data={film} />
          ))}
        </Header>
      </ContentContainer>
    </Container>
  );
};

export default Karakter;
